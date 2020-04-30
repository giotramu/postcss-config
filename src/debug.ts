import {Debug} from './_types';

export function debugConfig({browsers, sourceMap, config}: Debug): void {
  const {log} = console;

  /* eslint-disable no-console */
  log('[postcss-config] css source-map:', sourceMap);
  log('[postcss-config] supported browsers:', browsers?.join(', '));
  log('[postcss-config] full postcss config:', '\n', JSON.stringify(config));
  /* eslint-enable no-console */
}
