import type { PostcssConfig } from '../core/types'

export const postcssConfig: PostcssConfig = {
  map: undefined,
  syntax: undefined,
  plugins: {
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
          discardComments: { removeAll: true },
          'postcss-svgo': {
            plugins: [
              { removeDimensions: true },
              { removeScriptElement: true },
              { sortAttrs: true }
            ]
          }
        }
      ]
    },
    'postcss-reporter': {
      clearReportedMessages: true,
      positionless: 'last'
    }
  }
}
