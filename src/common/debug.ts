import {printLog} from './helpers';
import type {DebugConfig} from './types';

export function debugConfig({browsers, sourceMap, config}: DebugConfig): void {
  printLog('CSS Source-Map: ', sourceMap);
  printLog('Supported Browsers: ', browsers.join(', '));
  printLog('Generated PostCSS Config: ', JSON.stringify(config));
}
