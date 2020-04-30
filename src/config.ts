import {Options, PostcssConfig} from './_types';
import * as settings from './settings';

export function getPostcssConfig({
  browsers,
  sourceMap
}: Options): PostcssConfig {
  return {
    map: sourceMap,
    syntax: 'postcss-scss',
    plugins: {
      // Plugin execution order is top-down
      '@csstools/postcss-sass': settings.postsass(),
      'postcss-selector-not': true,
      'postcss-custom-media': true,
      cssnano: settings.cssnano(browsers),
      'postcss-reporter': settings.reporter()
    }
  };
}
