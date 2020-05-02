import getConfig from '../src';
import expectedConfig from './_config';

test('getConfig should returns the standard config', () => {
  expect(getConfig()).toStrictEqual(expectedConfig);
});

test('getConfig should returns the standard config with options', () => {
  const browsers = ['> 1%', 'IE 10'];
  const sourceMap = false;
  const config = getConfig({browsers, sourceMap});
  const autoprefixer = config.plugins.autoprefixer;

  expect(config.map).toBe(false);

  expect(autoprefixer.overrideBrowserslist).toBe(browsers);
});

test('getConfig should log options and config', () => {
  /* eslint-disable no-console */
  console.log = jest.fn();
  getConfig({debug: true});
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
    JSON.stringify(expectedConfig)
  );
  /* eslint-enable no-console */
});

test('getConfig returns the standard config on invalid argument', () => {
  // @ts-ignore
  const config = getConfig(Math.random());

  expect(config).toStrictEqual(expectedConfig);
});

// test('extends should add "postcss-fake-plugin" to the plugins list', () => {
//   const config = postcssConfig.extends({
//     plugins: {
//       'postcss-fake-plugin': true
//     }
//   });

//   expect(config.plugins).toStrictEqual({
//     ...expectedConfig.plugins,
//     'postcss-fake-plugin': true
//   });
// });

// test(`extends's standard behavior is overwriting the default config`, () => {
//   const config = postcssConfig.extends({
//     plugins: {
//       cssnano: {
//         preset: [
//           'default',
//           {
//             discardComments: {
//               removeAll: false
//             }
//           }
//         ]
//       }
//     }
//   });

//   expect(config.plugins).toMatchObject({
//     cssnano: {
//       preset: [
//         'default',
//         {
//           discardComments: {
//             removeAll: false
//           }
//         }
//       ]
//     }
//   });
// });

// test('setBrowsers and getDefault should return the default config with browsers query updated', () => {
//   const browsers = ['> 1%', 'IE 10'];
//   const config = postcssConfig.setBrowsers(browsers).getDefault();

//   expect(
//     // @ts-ignore
//     config.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
//   ).toBe(browsers);
// });

// test('setBrowsers should ignore the value passed as parameter if is an empty array', () => {
//   const browsers = [
//     'last 2 versions',
//     'not ie <= 11',
//     'not op_mini all',
//     'not dead',
//     'not < 0.5%'
//   ];
//   const config = postcssConfig.setBrowsers([]).getDefault();

//   expect(
//     // @ts-ignore
//     config.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
//   ).toStrictEqual(browsers);
// });

// test('setBrowsers combined with extends should return an updated config with new browsers list', () => {
//   const browsers = ['> 1%', 'IE 10'];
//   const config = postcssConfig.setBrowsers(browsers).extends({
//     plugins: {
//       'postcss-fake-plugin': true
//     }
//   });

//   expect(
//     // @ts-ignore
//     config.plugins.cssnano.preset[1].autoprefixer.overrideBrowserslist
//   ).toBe(browsers);

//   expect(
//     Object.hasOwnProperty.call(config.plugins, 'postcss-fake-plugin')
//   ).toBe(true);
// });
