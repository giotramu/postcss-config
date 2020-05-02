import extendsConfig from '../src/extends';
import expectedConfig from './_config';

test('extendsConfig should append postcss-fake-plugin to the plugins list', () => {
  const config = extendsConfig({
    'postcss-fake-plugin': true
  });

  expect(config.plugins).toStrictEqual({
    ...expectedConfig.plugins,
    'postcss-fake-plugin': true
  });
});

test(`extendsConfig should overwriting the default config`, () => {
  expect(extendsConfig({}).plugins.cssnano).toStrictEqual(
    expectedConfig.plugins.cssnano
  );

  const config = extendsConfig({cssnano: false});

  expect(config.plugins.cssnano).toBe(false);
});

test(`extendsConfig should returns the extended config with options`, () => {
  const browsers = ['> 1%', 'IE 10'];
  const sourceMap = false;
  const config = extendsConfig(
    {'postcss-fake-plugin': true},
    {browsers, sourceMap}
  );
  const autoprefixer = config.plugins.autoprefixer;

  expect(config.plugins).toMatchObject({'postcss-fake-plugin': true});

  expect(config.map).toBe(false);

  expect(autoprefixer.overrideBrowserslist).toBe(browsers);
});

test('extendsConfig should log options and config', () => {
  /* eslint-disable no-console */
  console.log = jest.fn();

  extendsConfig({'postcss-fake-plugin': true}, {debug: true});
  const autoprefixer = expectedConfig.plugins.autoprefixer;

  expect(console.log).toHaveBeenCalledWith('[postcss-config] css source-map:', {
    inline: false
  });

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] supported browsers:',
    autoprefixer.overrideBrowserslist?.join(', ')
  );

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] full postcss config:',
    '\n',
    JSON.stringify({
      ...expectedConfig,
      plugins: {
        ...expectedConfig.plugins,
        'postcss-fake-plugin': true
      }
    })
  );
  /* eslint-enable no-console */
});

test('extendsConfig returns the standard config on invalid argument', () => {
  /* eslint-disable no-console */
  console.log = jest.fn();

  // @ts-ignore
  const config = extendsConfig(Math.random());

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] pass an object parameter.'
  );
  /* eslint-enable no-console */

  expect(config).toStrictEqual(expectedConfig);
});
