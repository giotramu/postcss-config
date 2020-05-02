import {isBoolean, isBrowserslist} from './_helpers';
import {Options} from './_types';
import {supportedBrowsers} from './browsers';

type CheckedOptions = Required<Options>;

export function checkOptions(options?: Options): CheckedOptions {
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
