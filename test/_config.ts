import {PostcssConfig} from '../src/_types';

const postcssConfig: PostcssConfig = {
  map: {inline: false},
  syntax: 'postcss-scss',
  plugins: {
    '@csstools/postcss-sass': {outputStyle: 'expanded'},
    'postcss-selector-not': true,
    'postcss-custom-media': true,
    autoprefixer: {
      grid: 'autoplace',
      overrideBrowserslist: [
        'last 2 versions',
        'not ie <= 11',
        'not op_mini all',
        'not dead',
        'not < 0.5%'
      ]
    },
    cssnano: {
      preset: ['default', {discardComments: {removeAll: true}}]
    },
    'postcss-reporter': {
      clearReportedMessages: true,
      positionless: 'last',
      throwError: true
    }
  }
};

export default postcssConfig;
