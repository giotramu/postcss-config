import {isObject, mergeObjects} from './_helpers';
import {Options, PostcssConfig} from './_types';
import {getPostcssConfig} from './config';
import {debugConfig} from './debug';
import {checkOptions} from './options';

export = extendsConfig;

function extendsConfig(plugins: object, options?: Options): PostcssConfig {
  const {debug, sourceMap, browsers} = checkOptions(options);
  const source = getPostcssConfig({browsers, sourceMap});
  let config = source;

  if (isObject(plugins)) {
    const extendedPlugins = mergeObjects(source.plugins, plugins);
    config = {...source, plugins: extendedPlugins};
  } else {
    // eslint-disable-next-line no-console
    console.log('[postcss-config] pass an object parameter.');
  }

  if (debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
