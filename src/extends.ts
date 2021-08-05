import merge from 'deepmerge';
import {getPostcssConfig} from './common/config';
import {debugConfig} from './common/debug';
import {optionsParser} from './common/options';
import {pluginsParser} from './common/plugins';
import type {ExternalOptions, PostcssConfig, Plugins} from './common/types';

export = extendsConfig;

function extendsConfig(
  plugins: Plugins,
  options?: ExternalOptions
): PostcssConfig {
  const {browsers, sourceMap, syntax} = optionsParser(options);
  const source = getPostcssConfig({browsers, sourceMap, syntax});

  const parsedPlugins = pluginsParser(plugins);
  const extendedPlugins = mergeObjects(source.plugins, parsedPlugins);
  const config = {...source, plugins: extendedPlugins};

  if (options?.debug) debugConfig({browsers, sourceMap, syntax, config});

  return config;
}

// --- Helpers
function mergeObjects<T1, T2>(
  source: Partial<T1>,
  target: Partial<T2>
): T1 & T2 {
  return merge(source, target, {arrayMerge: overwriteArrays});
}

function overwriteArrays(_: [], source: []): [] {
  return source;
}
