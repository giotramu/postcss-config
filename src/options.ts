import {isBoolean, isBrowserslist} from './_helpers';
import {ExtendedOptions} from './_types';
import {supportedBrowsers} from './browsers';

export function checkOptions(options?: ExtendedOptions): ExtendedOptions {
  const browsers = supportedBrowsers;
  const debug = false;
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
