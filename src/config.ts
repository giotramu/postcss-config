import {ConfigOptions, PostcssConfig} from './_types';
import * as settings from './settings';

export function getPostcssConfig({
  browsers,
  sourceMap
}: ConfigOptions): PostcssConfig {
  return {
    map: sourceMap,
    syntax: 'postcss-scss',
    plugins: {
      // Plugin execution order is top-down
      '@csstools/postcss-sass': settings.postsass(),
      'postcss-selector-not': true,
      'postcss-custom-media': true,
      autoprefixer: settings.autoprefixer(browsers),
      cssnano: settings.cssnano(),
      'postcss-reporter': settings.reporter()
    }
  };
}
