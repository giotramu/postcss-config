import {ProcessOptions} from 'postcss';
import {Optional, Unionize} from 'utility-types';

export type MapOption = ProcessOptions['map'];
export type BrowsersOption = string[];
export type DebugOption = boolean;

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PostcssStandardPlugins {
  [key: string]: any;
  '@csstools/postcss-sass': any;
  'postcss-selector-not': any;
  'postcss-custom-media': any;
  autoprefixer: any;
  cssnano: any;
  'postcss-reporter': any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface PostcssConfig {
  parser?: string | ProcessOptions['parser'];
  stringifier?: string | ProcessOptions['stringifier'];
  syntax?: string | ProcessOptions['syntax'];
  map?: MapOption;
  to?: ProcessOptions['to'];
  from?: ProcessOptions['from'];
  plugins: Unionize<PostcssStandardPlugins>;
}

export interface ConfigOptions {
  browsers: string[];
  sourceMap: MapOption;
}

export interface Options extends Optional<ConfigOptions> {
  debug?: boolean;
}

export interface DebugConfig extends ConfigOptions {
  config: object;
}
