import Ora from 'ora';
import rxjs from 'rxjs';
import colors from 'ansi-colors';

import buildAndWatch from './watch.js';
import createBundle from './bundle.js';

const needToWatch = process.env.ENV === 'development';
const coloured = (str, status) => {
  return {
    succeed: colors.green(str),
    info: colors.blue(str),
    warn: colors.yellow(str),
    error: colors.red(str),
  }[status];
};
const spinners = {
  building: new Ora(coloured('Build is on the way', 'succeed')),
};

const { Observable } = rxjs;
const build = new Observable((subscriber) => {
  if (needToWatch) {
    buildAndWatch(subscriber, spinners).catch((error) => {
      spinners.building.fail(coloured(error, 'error'));
      subscriber.error();

      throw new Error('Failed to build and watch!');
    });
  } else {
    createBundle({ env: process.env.ENV, minify: !needToWatch, spinners, subscriber })
      .then(() => subscriber.complete())
      .catch((error) => subscriber.error(error));
  }
});

build.subscribe(
  (data) => {
    const { status, message } = data;
    const spinner = new Ora();

    if (spinners.building.isSpinning && status === 'warn') {
      spinners.building.warn();
    }

    spinner[status](coloured(message, status));
  },
  (err) => {
    spinners.building.fail(err);
  },
  () => {
    new Ora('done').succeed();
  }
);
