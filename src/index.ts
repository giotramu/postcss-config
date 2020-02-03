import merge from 'deepmerge';
import {ConfigProps, getConfig} from './config';

interface ApisProps {
  getDefault: () => ConfigProps;
  extends: (a: ConfigProps) => {};
  setBrowsers: (a: string[]) => Omit<ApisProps, 'setBrowsers'>;
}

const apis: ApisProps = {
  extends: (target: ConfigProps): {} => mergeConfigs(target, getConfig()),
  getDefault: getConfig,
  setBrowsers
};

export = apis;

function mergeConfigs(target: {}, source: {}): {} {
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

interface SetBrowsersProps extends Omit<ApisProps, 'setBrowsers'> {}

function setBrowsers(browsers: string[]): SetBrowsersProps {
  let sourceConfig = getConfig();

  if (Array.isArray(browsers) && browsers.length > 0) {
    sourceConfig = getConfig(browsers);
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      '[@giotramu/postcss-config] You must pass a valid Browserslist query.'
    );
  }

  return {
    extends: (target: ConfigProps) => mergeConfigs(target, sourceConfig),
    getDefault: () => sourceConfig
  };
}

// --- helpers
function isObject(obj: {}): boolean {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && Boolean(obj));
}

function overwriteArrays(_: [], source: []): [] {
  return source; // --- overwrites the existing array values completely rather than concatenating them
}
