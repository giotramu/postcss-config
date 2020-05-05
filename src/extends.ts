import {mergeObjects} from './_helpers';
import {ExtOptions, PostcssConfig, Plugins} from './_types';
import {getPostcssConfig} from './config';
import {debugConfig} from './debug';
import {optionsParser} from './options';
import {pluginsParser} from './plugins';

export = extendsConfig;

function extendsConfig(plugins: Plugins, options?: ExtOptions): PostcssConfig {
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
