import { basename, resolve as resolvePath, dirname } from 'path';
import { fileURLToPath } from 'url';

import { watch } from 'rollup';
import browserSync from 'browser-sync';

import { fileSize } from '../helpers/mix.js';

import { getInputOptions, getOutputOptions, createOnWarn } from './options.js';

const filename = fileURLToPath(import.meta.url);
const getPath = (file) => resolvePath(dirname(filename), file);

export default function buildAndWatch(subscriber, spinners) {
  return new Promise((resolve, reject) => {
    const inputOptions = getInputOptions('development', false);
    const outputOptions = getOutputOptions();

    inputOptions.onwarn = createOnWarn(subscriber);

    let firstTime = true;

    const watcher = watch({
      ...inputOptions,
      output: [outputOptions],
      watch: { clearScreen: false },
    });

    watcher.on('event', (evt) => {
      let message = '';

      switch (evt.code) {
        case 'START':
          spinners.building.start();

          break;
        case 'BUNDLE_END': {
          spinners.building.isSpinning && spinners.building.succeed();

          const input = basename(evt.input.toString());
          const bundle = evt.output.toString();

          message = `Compiled ${input} -> ${basename(bundle)} in ${evt.duration / 1000} seconds!`;
          subscriber.next({ status: 'info', message });

          message = `At: ${new Date()}`;
          subscriber.next({ status: 'info', message });

          message = `Bundle size: ${fileSize(bundle)}`;
          subscriber.next({ status: 'info', message });

          if (firstTime) {
            firstTime = false;
            browserSync({
              single: true,
              server: getPath('../public'),
              files: getPath('../public'),
              port: 3000,
              logLevel: 'silent',
            });
          }

          break;
        }
        case 'ERROR':
          reject(evt.error.message);

          break;
      }
    });
  });
}
