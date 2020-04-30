export function postsass(): object {
  /**
   * Dart Sass options:
   * https://github.com/sass/dart-sass/blob/master/README.md#javascript-api
   */
  return {
    outputStyle: 'expanded'
  };
}

export function cssnano(overrideBrowserslist: string[]): object {
  return {
    preset: [
      'advanced',
      {
        autoprefixer: {
          grid: true,
          overrideBrowserslist
        },
        discardComments: {
          removeAll: true
        },
        /**
         * Disable some dangerous optimizations
         * to reduce the risk of breakage across projects.
         * 1. https://cssnano.co/optimisations/discardunused
         * 2. https://cssnano.co/optimisations/mergeidents
         * 3. https://cssnano.co/optimisations/minifyselectors
         * 4. https://cssnano.co/optimisations/reduceidents
         * 5. https://cssnano.co/optimisations/zindex
         */
        discardUnused: false /* 1 */,
        mergeIdents: false /* 2 */,
        minifySelectors: false /* 3 */,
        reduceIdents: false /* 4 */,
        zindex: false /* 5 */
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
