import extendsConfig from '../src/extends';
import expectedConfig from './_config';

test('extendsConfig should append postcss-fake-plugin to the plugins list', () => {
  const config = extendsConfig(['postcss-fake-plugin']);

  expect(config.plugins).toStrictEqual({
    ...expectedConfig.plugins,
    'postcss-fake-plugin': true
  });
});

test(`extendsConfig should returns the extended config with options`, () => {
  const browsers = ['> 1%', 'IE 10'];
  const sourceMap = false;
  const config = extendsConfig(['postcss-fake-plugin'], {browsers, sourceMap});

  expect(config.plugins).toMatchObject({'postcss-fake-plugin': true});

  expect(config.map).toBe(false);

  expect(config.plugins.autoprefixer.overrideBrowserslist).toBe(browsers);
});

test(`extendsConfig should turn off one plugins`, () => {
  expect(extendsConfig([]).plugins.autoprefixer).toStrictEqual(
    expectedConfig.plugins.autoprefixer
  );

  const config = extendsConfig([['autoprefixer', false]]);

  expect(config.plugins.autoprefixer).toBe(false);
});

test(`extendsConfig should turn off multiple plugins`, () => {
  expect(extendsConfig([]).plugins.cssnano).toStrictEqual(
    expectedConfig.plugins.cssnano
  );

  expect(extendsConfig([]).plugins.autoprefixer).toStrictEqual(
    expectedConfig.plugins.autoprefixer
  );

  expect(extendsConfig([]).plugins['postcss-custom-media']).toBe(true);

  const config = extendsConfig([
    ['postcss-custom-media', false],
    ['autoprefixer', false],
    ['cssnano', false]
  ]);

  expect(config.plugins['postcss-custom-media']).toBe(false);

  expect(config.plugins.autoprefixer).toBe(false);

  expect(config.plugins.cssnano).toBe(false);
});

test('extendsConfig should log options and config', () => {
  /* eslint-disable no-console */
  console.log = jest.fn();
  extendsConfig([['postcss-fake-plugin', true]], {debug: true});

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] ',
    'CSS Source-Map: ',
    {
      inline: false
    }
  );

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] ',
    'Supported Browsers: ',
    expectedConfig.plugins.autoprefixer.overrideBrowserslist?.join(', ')
  );

  expect(console.log).toHaveBeenCalledWith(
    '[postcss-config] ',
    'Generated PostCSS Config: ',
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
    '[postcss-config] ',
    'Pass an array of PostCSS plugins.',
    'Read the docs: https://github.com/giotramu/postcss-config/#extend-the-config'
  );
  /* eslint-enable no-console */

  expect(config).toStrictEqual(expectedConfig);
});

test(`extendsConfig returns the extended config on invalid plugin's identifier`, () => {
  // @ts-ignore
  const config = extendsConfig([[Math.random(), false]]);

  expect(config).toStrictEqual(expectedConfig);
});

test(`extendsConfig returns the extended config on invalid plugin's settings`, () => {
  // @ts-ignore
  const config = extendsConfig([['postcss-fake-plugin', Math.random()]]);

  expect(config.plugins).toMatchObject({'postcss-fake-plugin': true});
});
