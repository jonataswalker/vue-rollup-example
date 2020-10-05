import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

const filename = fileURLToPath(import.meta.url);
const resolvePath = (file) => resolve(dirname(filename), file);

export function createOnWarn(subscriber) {
  return (warning) => {
    // skip certain warnings
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

    if (warning.code === 'NON_EXISTENT_EXPORT') {
      subscriber.error(warning.message);

      return;
    }

    subscriber.next({ status: 'warn', message: warning.message });
  };
}

export function getInputOptions(environment, minify = true) {
  const plugins = [
    vue(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(environment) }),
    nodeResolve({ extensions: ['.js', '.vue'], browser: true, preferBuiltins: true }),
    commonjs(),
    buble({ target: { chrome: 70 } }),
    minify && terser.terser({ output: { comments: /^!/u } }),
  ];

  return { input: resolvePath('../src/app.js'), plugins };
}

export function getOutputOptions() {
  const { name, version } = JSON.parse(readFileSync(resolvePath('../package.json')));
  const banner = `
    /*!
    * ${name} - v${version}
    * Built: ${new Date()}
    */
  `;

  return { banner, file: resolvePath('../public/static/app.js'), format: 'iife' };
}
