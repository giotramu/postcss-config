import {BrowsersOption} from './_types';

export function postsass(): object {
  /**
   * Dart Sass options:
   * https://github.com/sass/dart-sass/blob/master/README.md#javascript-api
   */
  return {
    outputStyle: 'expanded'
  };
}

export function autoprefixer(browsers: BrowsersOption): object {
  return {
    grid: 'no-autoplace',
    overrideBrowserslist: browsers
  };
}

export function cssnano(): object {
  return {
    preset: ['default', {discardComments: {removeAll: true}}]
  };
}

export function reporter(): object {
  return {
    clearReportedMessages: true,
    positionless: 'last',
    throwError: true
  };
}
