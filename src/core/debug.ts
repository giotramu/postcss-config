import { printLog } from './helpers'
import type { DebugConfig } from './types'

export const debugConfig = ({
  browsers,
  sourceMap,
  syntax,
  config
}: DebugConfig): void => {
  printLog('Supported Browsers: ', browsers.join(', '))
  printLog('CSS Source-Map: ', sourceMap)
  printLog('Syntax: ', syntax)
  printLog('Generated PostCSS Config: ', JSON.stringify(config))
}
