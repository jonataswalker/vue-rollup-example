import fs from 'fs';

import prettyBytes from 'pretty-bytes';
import prettyTime from 'pretty-time';

export function fileSize(file) {
  try {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const { size } = fs.statSync(file);

    return prettyBytes(size);
  } catch (error) {
    return error.message;
  }
}

export function prettyTimeFromBigint(start, end) {
  return prettyTime(Number(end - start));
}
