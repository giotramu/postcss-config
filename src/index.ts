import {ExternalOptions, PostcssConfig} from './common/_types';
import {getPostcssConfig} from './common/config';
import {debugConfig} from './common/debug';
import {optionsParser} from './common/options';

export = getConfig;

function getConfig(options?: ExternalOptions): PostcssConfig {
  const {sourceMap, browsers} = optionsParser(options);
  const config = getPostcssConfig({browsers, sourceMap});

  if (options?.debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
