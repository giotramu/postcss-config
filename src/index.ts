import { getPostcssConfig } from './core/config'
import { debugConfig } from './core/debug'
import { optionsParser } from './core/options'
import type { ExternalOptions, PostcssConfig } from './core/types'

export = getConfig

function getConfig(options?: ExternalOptions): PostcssConfig {
  const { browsers, sourceMap, syntax } = optionsParser(options)
  const config = getPostcssConfig({ browsers, sourceMap, syntax })

  if (options?.debug) {
    debugConfig({ browsers, sourceMap, syntax, config })
  }

  return config
}
