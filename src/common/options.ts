import {supportedBrowsers} from './browsers';
import {isBoolean} from './helpers';
import type {ConfigOptions, ExternalOptions} from './types';

export function optionsParser(options?: ExternalOptions): ConfigOptions {
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
