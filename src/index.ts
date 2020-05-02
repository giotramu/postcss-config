import {Options, PostcssConfig} from './_types';
import {getPostcssConfig} from './config';
import {debugConfig} from './debug';
import {optionsParser} from './options';

export = getConfig;

function getConfig(options?: Options): PostcssConfig {
  const {debug, sourceMap, browsers} = optionsParser(options);
  const config = getPostcssConfig({browsers, sourceMap});

  if (debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
