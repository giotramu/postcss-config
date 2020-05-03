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

export function inlinesvg(): object {
  return {
    xmlns: false
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
    preset: [
      'default',
      {
        discardComments: {removeAll: true},
        svgo: {
          /**
           * SVGO plugins:
           * https://github.com/svg/svgo/tree/master/plugins
           */
          plugins: [
            {removeDimensions: true},
            {removeScriptElement: true},
            {sortAttrs: true}
          ]
        }
      }
    ]
  };
}

export function reporter(): object {
  return {
    clearReportedMessages: true,
    positionless: 'last',
    throwError: true
  };
}
