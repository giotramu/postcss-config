import {isBoolean} from './_helpers';
import {Options} from './_types';
import {supportedBrowsers} from './browsers';

export function optionsParser(options?: Options): Required<Options> {
  const debug = false;
  const browsers = supportedBrowsers;
  const sourceMap = {inline: false};

  if (typeof options === 'undefined') {
    return {debug, browsers, sourceMap};
  }

  return {
    debug: isBoolean(options.debug) ? options.debug : debug,
    browsers: isBrowserslist(options.browsers) ? options.browsers : browsers,
    sourceMap: isBoolean(options.sourceMap) ? options.sourceMap : sourceMap
  };
}

export function isBrowserslist(a?: unknown): a is string[] {
  if (Array.isArray(a) && a.length > 0) {
    return a.filter(item => typeof item === 'string').length > 0;
  }

  return false;
}
