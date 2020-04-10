import postcssConfig from '../src';
import defaultConfig from './_config';

test('getDefault should returns the default config object', () => {
  const config = postcssConfig.getDefault();
  expect(config).toStrictEqual(defaultConfig);
});

test('extends should returns the default config if the parameter passed is not an object', () => {
  // @ts-ignore
  const config = postcssConfig.extends(Math.random());
  expect(config).toStrictEqual(defaultConfig);
});

test('extends should appends "postcss-fake-plugin" to the plugins object', () => {
  const extended = postcssConfig.extends({
    plugins: {
      'postcss-fake-plugin': true
    }
  });

  const plugins = Object.keys(extended.plugins);
  expect(plugins[plugins.length - 1]).toBe('postcss-fake-plugin');
});

test('extends standard behavior is to overwrite the default config', () => {
  const extended = postcssConfig.extends({
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
  });

  expect(extended.plugins).toMatchObject({
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
  const updated = postcssConfig.setBrowsers(browsers).getDefault();

  expect(
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
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
  const updated = postcssConfig.setBrowsers([]).getDefault();

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
  });

  expect(
    // @ts-ignore
    updated.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
  ).toBe(browsers);

  const plugins = Object.keys(updated.plugins);
  expect(plugins[plugins.length - 1]).toStrictEqual('postcss-fake-plugin');
});
