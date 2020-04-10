export default {
  map: false,
  syntax: 'postcss-scss',
  plugins: {
    '@csstools/postcss-sass': true,
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
          minifySelectors: false,
          reduceIdents: false
        }
      ]
    },
    'postcss-reporter': {
      clearReportedMessages: true
    }
  }
};
