import {ProcessOptions} from 'postcss';
import {Unionize} from 'utility-types';

export type SourceMapOption = ProcessOptions['map'];

export type BrowsersOption = string[];

export type DebugOption = boolean;

export interface PluginOption {
  [key: string]: unknown;
}

export type Plugin = string | [string, boolean] | [string, PluginOption];

export type Plugins = Plugin[];

export interface StandardPlugins {
  '@csstools/postcss-sass': unknown;
  'postcss-selector-not': unknown;
  'postcss-custom-media': unknown;
  autoprefixer: unknown;
  cssnano: unknown;
  'postcss-reporter': unknown;
}

export type PostcssPlugins = PluginOption & Unionize<StandardPlugins>;

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
