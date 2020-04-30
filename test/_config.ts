export default {
  map: {inline: false},
  syntax: 'postcss-scss',
  plugins: {
    '@csstools/postcss-sass': {outputStyle: 'expanded'},
    'postcss-selector-not': true,
    'postcss-custom-media': true,
    cssnano: {
      preset: [
        'advanced',
        {
          autoprefixer: {
            grid: true,
            overrideBrowserslist: [
              'last 2 versions',
              'not ie <= 11',
              'not op_mini all',
              'not dead',
              'not < 0.5%'
            ]
          },
          discardComments: {
            removeAll: true
          },
          discardUnused: false,
          mergeIdents: false,
          minifySelectors: false,
          reduceIdents: false,
          zindex: false
        }
      ]
    },
    'postcss-reporter': {
      clearReportedMessages: true,
      positionless: 'last',
      throwError: true
    }
  }
};
