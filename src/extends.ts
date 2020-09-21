import {mergeObjects} from './common/_helpers';
import {ExternalOptions, PostcssConfig, Plugins} from './common/_types';
import {getPostcssConfig} from './common/config';
import {debugConfig} from './common/debug';
import {optionsParser} from './common/options';
import {pluginsParser} from './common/plugins';

export = extendsConfig;

function extendsConfig(
  plugins: Plugins,
  options?: ExternalOptions
): PostcssConfig {
  const {sourceMap, browsers} = optionsParser(options);
  const source = getPostcssConfig({browsers, sourceMap});

  const parsedPlugins = pluginsParser(plugins);
  const extendedPlugins = mergeObjects(source.plugins, parsedPlugins);
  const config = {...source, plugins: extendedPlugins};

  if (options?.debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
