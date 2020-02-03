/* eslint-disable @typescript-eslint/ban-ts-ignore */
import postcssConfig from '../';
import {ConfigProps} from '../config';
import defaultConfig from './_config';

test('getDefault should returns the default config object', () => {
  const pcssConfig = postcssConfig.getDefault();
  expect(pcssConfig).toMatchObject(defaultConfig);
});

test('extends should returns the default config if the parameter passed is not an object', () => {
  // @ts-ignore
  const pcssConfig = postcssConfig.extends(Math.random());
  expect(pcssConfig).toMatchObject(defaultConfig);
});

test('extends should appends "postcss-fake-plugin" to the plugins object', () => {
  const expanded = postcssConfig.extends({
    plugins: {
      'postcss-fake-plugin': true
    }
  }) as ConfigProps;

  const plugins = Object.keys(expanded.plugins);
  expect(plugins[plugins.length - 1]).toBe('postcss-fake-plugin');
});

test('extends standard behavior is to overwrite the default config', () => {
  const expanded = postcssConfig.extends({
    plugins: {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    }
  }) as ConfigProps;

  expect(expanded.plugins).toMatchObject({
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }
  });
});

test('setBrowsers and getDefault should return the default config with browsers query updated', () => {
  const browsers = ['> 1%', 'IE 10'];
  const updated = postcssConfig
    .setBrowsers(browsers)
    .getDefault() as ConfigProps;

  expect(
    // @ts-ignore
    updated.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
  ).toBe(browsers);
});

test('setBrowsers should ignore the value passed as parameter if is an empty array', () => {
  const browsers = [
    'last 2 versions',
    'not ie <= 11',
    'not op_mini all',
    'not dead',
    'not < 0.5%'
  ];
  const updated = postcssConfig.setBrowsers([]).getDefault() as ConfigProps;

  expect(
    // @ts-ignore
    updated.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
  ).toStrictEqual(browsers);
});

test('setBrowsers and extends should return a new config with browsers query updated', () => {
  const browsers = ['> 1%', 'IE 10'];
  const updated = postcssConfig.setBrowsers(browsers).extends({
    plugins: {
      'postcss-fake-plugin': true
    }
  }) as ConfigProps;

  expect(
    // @ts-ignore
    updated.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
  ).toBe(browsers);

  const plugins = Object.keys(updated.plugins);
  expect(plugins[plugins.length - 1]).toStrictEqual('postcss-fake-plugin');
});
