import type { BrowsersOption, PluginOptions } from './types'

export const inlinesvg = (): PluginOptions => ({
  xmlns: false
})

export const autoprefixer = (browsers: BrowsersOption): PluginOptions => ({
  grid: 'no-autoplace',
  overrideBrowserslist: browsers
})

export const cssnano = (): PluginOptions => ({
  preset: [
    'default',
    {
      discardComments: { removeAll: true },
      'postcss-svgo': {
        /**
         * SVGO plugins:
         * https://github.com/svg/svgo/tree/master/plugins
         */
        plugins: [
          { removeDimensions: true },
          { removeScriptElement: true },
          { sortAttrs: true }
        ]
      }
    }
  ]
})

export const reporter = (): PluginOptions => ({
  clearReportedMessages: true,
  positionless: 'last'
})
