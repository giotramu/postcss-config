import {mergeObjects} from './_helpers';
import {ExtendedOptions} from './_types';
import {getPostcssConfig} from './config';
import {debugConfig} from './debug';
import {checkOptions} from './options';

export = expands;

function expands(target: object, options?: ExtendedOptions): object {
  const {debug, sourceMap, browsers} = checkOptions(options);
  const source = getPostcssConfig({browsers, sourceMap});
  const plugins = mergeObjects(source.plugins, target);
  const config = mergeObjects(source, {plugins});

  if (debug) {
    debugConfig({browsers, sourceMap, config});
  }

  return config;
}
