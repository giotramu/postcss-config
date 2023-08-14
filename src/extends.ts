import { getPostcssConfig } from './core/config'
import { debugConfig } from './core/debug'
import { mergeObjects } from './core/helpers'
import { optionsParser } from './core/options'
import { pluginsParser } from './core/plugins'
import type { ExternalOptions, PostcssConfig, Plugins } from './core/types'

const extendsConfig = (
  plugins: Plugins,
  options?: ExternalOptions
): PostcssConfig => {
  const { browsers, sourceMap, syntax } = optionsParser(options)
  const source = getPostcssConfig({ browsers, sourceMap, syntax })

  const parsedPlugins = pluginsParser(plugins)
  const extendedPlugins = mergeObjects(source.plugins, parsedPlugins)
  const config = { ...source, plugins: extendedPlugins }

  if (options?.debug) {
    debugConfig({ browsers, sourceMap, syntax, config })
  }

  return config
}

export = extendsConfig
