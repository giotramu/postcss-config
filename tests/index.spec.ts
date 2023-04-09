import {expect, test, vi} from 'vitest';
import getConfig from '../src';
import expectedConfig from './_config';

test('getConfig() returns the standard config.', () => {
  expect(getConfig()).toStrictEqual(expectedConfig);
});

test('getConfig() returns the standard config with default options.', () => {
  const config = getConfig();

  expect(getConfig()).toStrictEqual(expectedConfig);

  expect(config.map).toBeUndefined();

  expect(config.syntax).toBeUndefined();

  const autoprefixer = config.plugins.autoprefixer;

  // @ts-expect-error
  expect(autoprefixer.overrideBrowserslist).toStrictEqual([
    'last 2 versions',
    'not ie <= 11',
    'not op_mini all',
    'not dead',
    'not < 0.5%'
  ]);
});

test('getConfig() returns the standard config with custom options.', () => {
  const browsers = ['> 1%', 'IE 10'];

  const sourceMap = true;

  const config = getConfig({browsers, sourceMap});

  expect(getConfig()).toStrictEqual(expectedConfig);

  expect(config.map).toBe(true);

  expect(config.syntax).toBeUndefined();

  const autoprefixer = config.plugins.autoprefixer;

  // @ts-expect-error
  expect(autoprefixer.overrideBrowserslist).toBe(browsers);
});

test('getConfig() prints on the console the standard config and options.', () => {
  /* eslint-disable no-console */
  console.log = vi.fn();

  getConfig({debug: true});

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] ',
    'CSS Source-Map: ',
    undefined
  );

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] ',
    'Syntax: ',
    undefined
  );

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] ',
    'Supported Browsers: ',
    // @ts-expect-error
    expectedConfig.plugins.autoprefixer.overrideBrowserslist?.join(', ')
  );

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] ',
    'Generated PostCSS Config: ',
    JSON.stringify(expectedConfig)
  );
  /* eslint-enable no-console */
});

test('getConfig() returns the standard config on an invalid argument.', () => {
  // @ts-expect-error
  const config = getConfig(Math.random());

  expect(config).toStrictEqual(expectedConfig);
});
