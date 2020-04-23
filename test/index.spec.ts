import postcssConfig from '../src';
import expectedConfig from './_config';

test('getDefault should returns the default config', () => {
  const config = postcssConfig.getDefault();
  expect(config).toStrictEqual(expectedConfig);
});

test('extends should returns the default config if the parameter is invalid', () => {
  // @ts-ignore
  const config = postcssConfig.extends(Math.random());
  expect(config).toStrictEqual(expectedConfig);
});

test('extends should add "postcss-fake-plugin" to the plugins list', () => {
  const config = postcssConfig.extends({
    plugins: {
      'postcss-fake-plugin': true
    }
  });

  expect(config.plugins).toStrictEqual({
    ...expectedConfig.plugins,
    'postcss-fake-plugin': true
  });
});

test(`extends's standard behavior is overwriting the default config`, () => {
  const config = postcssConfig.extends({
    plugins: {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: false
            }
          }
        ]
      }
    }
  });

  expect(config.plugins).toMatchObject({
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: false
          }
        }
      ]
    }
  });
});

test('setBrowsers and getDefault should return the default config with browsers query updated', () => {
  const browsers = ['> 1%', 'IE 10'];
  const config = postcssConfig.setBrowsers(browsers).getDefault();

  expect(
    // @ts-ignore
    config.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
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
  const config = postcssConfig.setBrowsers([]).getDefault();

  expect(
    // @ts-ignore
    config.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
  ).toStrictEqual(browsers);
});

test('setBrowsers combined with extends should return an updated config with new browsers list', () => {
  const browsers = ['> 1%', 'IE 10'];
  const config = postcssConfig.setBrowsers(browsers).extends({
    plugins: {
      'postcss-fake-plugin': true
    }
  });

  expect(
    // @ts-ignore
    config.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
  ).toBe(browsers);

  expect(
    Object.hasOwnProperty.call(config.plugins, 'postcss-fake-plugin')
  ).toBe(true);
});
