import {isBoolean} from './_helpers';
import {ConfigOptions, ExtOptions} from './_types';
import {supportedBrowsers} from './browsers';

export function optionsParser(options?: ExtOptions): ConfigOptions {
  const browsers: ConfigOptions['browsers'] = supportedBrowsers;
  let sourceMap: ConfigOptions['sourceMap'] = false;

  if (typeof options === 'undefined') {
    return {browsers, sourceMap};
  }

  if (options.sourceMap === 'external') {
    sourceMap = {inline: false};
  }

  return {
    browsers: isBrowserslist(options.browsers) ? options.browsers : browsers,
    sourceMap: isBoolean(options.sourceMap) ? options.sourceMap : sourceMap
  };
}

function isBrowserslist(a?: unknown): a is string[] {
  if (Array.isArray(a) && a.length > 0) {
    return a.filter(item => typeof item === 'string').length > 0;
  }

  return false;
}
