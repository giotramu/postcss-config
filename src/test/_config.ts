import {PostcssConfig} from '../_types';

const postcssConfig: PostcssConfig = {
  map: {inline: false},
  syntax: 'postcss-scss',
  plugins: {
    '@csstools/postcss-sass': {outputStyle: 'expanded'},
    'postcss-selector-not': true,
    'postcss-custom-media': true,
    'postcss-inline-svg': {
      xmlns: false
    },
    autoprefixer: {
      grid: 'no-autoplace',
      overrideBrowserslist: [
        'last 2 versions',
        'not ie <= 11',
        'not op_mini all',
        'not dead',
        'not < 0.5%'
      ]
    },
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {removeAll: true},
          svgo: {
            plugins: [
              {removeDimensions: true},
              {removeScriptElement: true},
              {sortAttrs: true}
            ]
          }
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

export default postcssConfig;
