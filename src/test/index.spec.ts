import getConfig from '..';
import expectedConfig from './_config';

describe('getConfig', () => {
  it('returns the standard config', () => {
    expect(getConfig()).toStrictEqual(expectedConfig);
  });

  it('returns the standard config with options', () => {
    const browsers = ['> 1%', 'IE 10'];
    const sourceMap = false;
    const config = getConfig({browsers, sourceMap});
    const autoprefixer = config.plugins.autoprefixer;

    expect(config.map).toBe(false);

    expect(autoprefixer.overrideBrowserslist).toBe(browsers);
  });

  it('prints on the console the standard config and options', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();
    getConfig({debug: true});

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
      JSON.stringify(expectedConfig)
    );
    /* eslint-enable no-console */
  });

  it('returns the standard config on an invalid argument', () => {
    // @ts-ignore
    const config = getConfig(Math.random());

    expect(config).toStrictEqual(expectedConfig);
  });
});
