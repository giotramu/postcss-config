import merge from 'deepmerge';
import {PcssConfigProps, getConfig} from './config';

interface ConfigProps {
  extends: (a: {}) => PcssConfigProps;
  getDefault: () => PcssConfigProps;
  setBrowsers: (a: string[]) => Omit<ConfigProps, 'setBrowsers'>;
}

export = {
  extends: (target: {}): PcssConfigProps => mergeConfigs(target, getConfig()),
  getDefault: getConfig,
  setBrowsers
};

function mergeConfigs(target: {}, source: PcssConfigProps): PcssConfigProps {
  return isValidTarget(target)
    ? merge(source, target, {arrayMerge: overwriteArrays})
    : source;
}

function isValidTarget(target?: {}): boolean {
  const isValid = typeof target !== 'undefined' && isObject(target);

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.warn(
      '[@giotramu/postcss-config] You must pass an object as a parameter.'
    );
  }

  return isValid;
}

function setBrowsers(browsers: string[]): Omit<ConfigProps, 'setBrowsers'> {
  const isBrowserslist = Array.isArray(browsers) && browsers.length > 0;

  if (!isBrowserslist) {
    // eslint-disable-next-line no-console
    console.warn(
      '[@giotramu/postcss-config] You must pass a valid Browserslist query.'
    );
  }

  const source: PcssConfigProps = isBrowserslist
    ? getConfig(browsers)
    : getConfig();

  return {
    extends: target => mergeConfigs(target, source),
    getDefault: () => source
  };
}

// --- helpers
function isObject(obj: {}): boolean {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && Boolean(obj));
}

function overwriteArrays(_: [], source: []): [] {
  return source; // overwrites the existing array values completely rather than concatenating them
}
