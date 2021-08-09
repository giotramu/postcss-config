import {isBoolean} from './helpers';
import type {ConfigOptions, ExternalOptions} from './types';

const DEFAULT_BROWSERS = [
  'last 2 versions',
  'not ie <= 11',
  'not op_mini all',
  'not dead',
  'not < 0.5%'
];

const DEFAULT_SYNTAX = undefined;

const DEFAULT_SOURCE_MAP = undefined;

export function optionsParser(options?: ExternalOptions): ConfigOptions {
  const browsers: ConfigOptions['browsers'] = DEFAULT_BROWSERS;

  const syntax: ConfigOptions['syntax'] = DEFAULT_SYNTAX;

  let sourceMap: ConfigOptions['sourceMap'] = DEFAULT_SOURCE_MAP;

  if (typeof options === 'undefined') {
    return {browsers, sourceMap, syntax};
  }

  if (options.sourceMap === 'inline') {
    sourceMap = {inline: true};
  }

  return {
    browsers: isBrowserslist(options.browsers) ? options.browsers : browsers,
    sourceMap: isBoolean(options.sourceMap) ? options.sourceMap : sourceMap,
    syntax: options.syntax ? options.syntax : syntax
  };
}

// --- Helpers
function isBrowserslist(a?: unknown): a is string[] {
  if (Array.isArray(a) && a.length > 0) {
    return a.filter(item => typeof item === 'string').length > 0;
  }

  return false;
}
