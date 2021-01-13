import * as settings from './settings';
import {ConfigOptions, PostcssConfig} from './types';

export function getPostcssConfig({
  browsers,
  sourceMap
}: ConfigOptions): PostcssConfig {
  return {
    map: sourceMap,
    // syntax: 'postcss-scss', // --- FIXME: Uncomment after this PR was closed: https://github.com/jonathantneal/postcss-sass/issues/24
    plugins: {
      // --- The plugins execution order is top-down
      // '@csstools/postcss-sass': settings.postsass(), // --- FIXME: Uncomment after this PR was closed: https://github.com/jonathantneal/postcss-sass/issues/24
      // 'postcss-selector-not': true, // --- FIXME: Uncomment after this PR was closed: https://github.com/postcss/postcss-selector-not/pull/16
      'postcss-custom-media': true,
      'postcss-inline-svg': settings.inlinesvg(),
      autoprefixer: settings.autoprefixer(browsers),
      // cssnano: settings.cssnano(), // --- FIXME: Uncomment after the cssnano package was bumped
      'postcss-reporter': settings.reporter()
    }
  };
}
