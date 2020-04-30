import {ExtendedOptions, PostcssConfig} from './_types';
import {getPostcssConfig} from './config';
import {debugConfig} from './debug';
import {checkOptions} from './options';

export = getConfig;

function getConfig(options?: ExtendedOptions): PostcssConfig {
  const {debug, sourceMap, browsers} = checkOptions(options);
  const config = getPostcssConfig({browsers, sourceMap});

  if (debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
