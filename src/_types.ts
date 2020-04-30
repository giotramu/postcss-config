import {ProcessOptions} from 'postcss';

export type SourceMap = ProcessOptions['map'];

export interface PostcssConfig {
  parser?: string | ProcessOptions['parser'];
  stringifier?: string | ProcessOptions['stringifier'];
  syntax?: string | ProcessOptions['syntax'];
  map?: SourceMap;
  to?: ProcessOptions['to'];
  from?: ProcessOptions['from'];
  plugins: object;
}

export interface Options {
  browsers: string[];
  sourceMap: SourceMap;
}

export interface ExtendedOptions extends Options {
  debug: boolean;
}

export interface Debug extends Options {
  config: object;
}
