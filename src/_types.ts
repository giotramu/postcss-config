import {ProcessOptions} from 'postcss';
import {Unionize} from 'utility-types';

export type SourceMapOption = ProcessOptions['map'];

export type BrowsersOption = string[];

export type DebugOption = boolean;

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Plugin =
  | string
  | [string, boolean]
  | [string, {[key: string]: any}];

export type Plugins = Plugin[];

export interface StandardPlugins {
  '@csstools/postcss-sass': any;
  'postcss-selector-not': any;
  'postcss-custom-media': any;
  autoprefixer: any;
  cssnano: any;
  'postcss-reporter': any;
}

export type PostcssPlugins = {[key: string]: any} & Unionize<StandardPlugins>;
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface PostcssConfig {
  parser?: string | ProcessOptions['parser'];
  stringifier?: string | ProcessOptions['stringifier'];
  syntax?: string | ProcessOptions['syntax'];
  map?: SourceMapOption;
  to?: ProcessOptions['to'];
  from?: ProcessOptions['from'];
  plugins: PostcssPlugins;
}

export interface ConfigOptions {
  browsers: BrowsersOption;
  sourceMap: SourceMapOption;
}

export interface ExtOptions {
  browsers?: ConfigOptions['browsers'];
  sourceMap?: boolean | 'external';
  debug?: boolean;
}

export interface DebugConfig extends ConfigOptions {
  config: PostcssConfig;
}
