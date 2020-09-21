import {printLog} from './_helpers';
import {DebugConfig} from './_types';

export function debugConfig({browsers, sourceMap, config}: DebugConfig): void {
  printLog('CSS Source-Map: ', sourceMap);
  printLog('Supported Browsers: ', browsers.join(', '));
  printLog('Generated PostCSS Config: ', JSON.stringify(config));
}
