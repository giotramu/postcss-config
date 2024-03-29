import * as settings from './settings'
import type { ConfigOptions, PostcssConfig } from './types'

export const getPostcssConfig = ({
  browsers,
  sourceMap,
  syntax
}: ConfigOptions): PostcssConfig => ({
  map: sourceMap,
  syntax,
  plugins: {
    // --- The plugins execution order is top-down
    'postcss-custom-media': true,
    'postcss-inline-svg': settings.inlinesvg(),
    autoprefixer: settings.autoprefixer(browsers),
    cssnano: settings.cssnano(),
    'postcss-reporter': settings.reporter()
  }
})
