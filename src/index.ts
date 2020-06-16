import {ExternalOptions, PostcssConfig} from './_types';
import {getPostcssConfig} from './config';
import {debugConfig} from './debug';
import {optionsParser} from './options';

export = getConfig;

function getConfig(options?: ExternalOptions): PostcssConfig {
  const {sourceMap, browsers} = optionsParser(options);
  const config = getPostcssConfig({browsers, sourceMap});

  if (options?.debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
