import {mergeObjects} from './_helpers';
import {Options, PostcssConfig, Plugins} from './_types';
import {getPostcssConfig} from './config';
import {debugConfig} from './debug';
import {checkOptions} from './options';
import {pluginEncoder} from './plugins';

export = extendsConfig;

function extendsConfig(plugins: Plugins, options?: Options): PostcssConfig {
  const {debug, sourceMap, browsers} = checkOptions(options);
  const source = getPostcssConfig({browsers, sourceMap});

  const parsedPlugins = pluginEncoder(plugins);
  const extendedPlugins = mergeObjects(source.plugins, parsedPlugins);
  const config = {...source, plugins: extendedPlugins};

  if (debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
