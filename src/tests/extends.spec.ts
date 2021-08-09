import extendsConfig from '../extends';
import expectedConfig from './_config';

describe('extendsConfig', () => {
  it('appends "postcss-fake-plugin" to the plugins list', () => {
    const config = extendsConfig(['postcss-fake-plugin']);

    expect(config.plugins).toStrictEqual({
      ...expectedConfig.plugins,
      'postcss-fake-plugin': true
    });
  });

  it('returns the extended config with default options', () => {
    const config = extendsConfig(['postcss-fake-plugin']);

    expect(config.plugins).toMatchObject({'postcss-fake-plugin': true});

    expect(config.map).toBeUndefined();

    expect(config.syntax).toBeUndefined();

    // @ts-expect-error
    expect(config.plugins.autoprefixer.overrideBrowserslist).toStrictEqual([
      'last 2 versions',
      'not ie <= 11',
      'not op_mini all',
      'not dead',
      'not < 0.5%'
    ]);
  });

  it('returns the extended config with custom options', () => {
    const browsers = ['> 1%', 'IE 10'];

    const sourceMap = 'inline';

    const syntax = {
      parse: undefined,
      stringify: undefined
    };

    const config = extendsConfig(['postcss-fake-plugin'], {
      browsers,
      sourceMap,
      syntax
    });

    expect(config.plugins).toMatchObject({'postcss-fake-plugin': true});

    expect(config.map).toStrictEqual({inline: true});

    expect(config.syntax).toStrictEqual({
      parse: undefined,
      stringify: undefined
    });

    // @ts-expect-error
    expect(config.plugins.autoprefixer.overrideBrowserslist).toBe(browsers);
  });

  it('prints on the console the extended config and options', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();
    extendsConfig([['postcss-fake-plugin', true]], {debug: true});

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

  it('turns off a plugin', () => {
    expect(extendsConfig([]).plugins.autoprefixer).toStrictEqual(
      expectedConfig.plugins.autoprefixer
    );

    const config = extendsConfig([['autoprefixer', false]]);

    expect(config.plugins.autoprefixer).toBe(false);
  });

  it('turns off multiple plugins', () => {
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

  it('returns the standard config on an invalid argument', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();

    // @ts-expect-error
    const config = extendsConfig(Math.random());

    expect(console.log).toHaveBeenCalledWith(
      '[postcss-config] ',
      'Pass an array of PostCSS plugins.',
      'Read the docs: https://github.com/giotramu/postcss-config/#extend-the-config'
    );
    /* eslint-enable no-console */

    expect(config).toStrictEqual(expectedConfig);
  });

  it(`returns the standard config on a plugin's invalid identifier`, () => {
    // @ts-expect-error
    const config = extendsConfig([[Math.random(), false]]);

    expect(config).toStrictEqual(expectedConfig);
  });

  it(`returns the extended config on a plugin's invalid settings`, () => {
    const invalidSettings1 = extendsConfig([
      // @ts-expect-error
      ['postcss-fake-plugin', Math.random()]
    ]);
    const invalidSettings2 = extendsConfig([['postcss-fake-plugin', {}]]);

    expect(invalidSettings1.plugins).toMatchObject({
      'postcss-fake-plugin': true
    });
    expect(invalidSettings2.plugins).toMatchObject({
      'postcss-fake-plugin': true
    });
  });
});
