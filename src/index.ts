import {getPostcssConfig} from './common/config';
import {debugConfig} from './common/debug';
import {optionsParser} from './common/options';
import type {ExternalOptions, PostcssConfig} from './common/types';

export = getConfig;

function getConfig(options?: ExternalOptions): PostcssConfig {
  const {browsers, sourceMap, syntax} = optionsParser(options);
  const config = getPostcssConfig({browsers, sourceMap, syntax});

  if (options?.debug) {
    debugConfig({browsers, sourceMap, syntax, config});
  }

  return config;
}
