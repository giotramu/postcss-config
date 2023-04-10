import type { ProcessOptions } from 'postcss'
import type { Unionize } from 'utility-types'

export type SourceMapOption = ProcessOptions['map']

export type SyntaxOption = ProcessOptions['syntax']

export type BrowsersOption = string[]

export type DebugOption = boolean

export type PluginOptions = Record<string, unknown>

export type Plugin = string | [string, boolean] | [string, PluginOptions]

export type Plugins = Plugin[]

export interface StandardPlugins {
  'postcss-custom-media': unknown
  autoprefixer: unknown
  cssnano: unknown
  'postcss-reporter': unknown
}

export type PostcssPlugins = PluginOptions & Unionize<StandardPlugins>

export interface PostcssConfig {
  map: SourceMapOption
  syntax?: ProcessOptions['syntax']
  parser?: ProcessOptions['parser']
  stringifier?: ProcessOptions['stringifier']
  to?: string
  from?: string
  plugins: PostcssPlugins
}

export interface ConfigOptions {
  browsers: BrowsersOption
  sourceMap: SourceMapOption
  syntax?: SyntaxOption
}

export interface ExternalOptions {
  browsers?: ConfigOptions['browsers']
  debug?: boolean
  sourceMap?: boolean | 'inline'
  syntax?: ConfigOptions['syntax']
}

export interface DebugConfig extends ConfigOptions {
  config: PostcssConfig
}
