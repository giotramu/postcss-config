# PostCSS Config

Flexible [PostCSS][postcss-doc-url] config that combines useful plugins like Autoprefixer, CSSNano, SVGO, Inline SVG, Custom Media, etc. It offers granular control instead of postcss-preset-env.

[![NPM][npm-version-img]][npm-url]
[![NPM][npm-download-img]][npm-url]
[![CI Status][ci-img]][ci-url]
[![Coverage Status][coverage-img]][coverage-url]

- [PostCSS Config](#postcss-config)
  - [Install](#install)
  - [Usage](#usage)
  - [Standard config](#standard-config)
  - [Extend the config](#extend-the-config)
      - [Disable plugins](#disable-plugins)
  - [Options](#options)
  - [Browsers support](#browsers-support)
  - [Advanced usage](#advanced-usage)
  - [PostCSS Preset Env. Why not?](#postcss-preset-env-why-not)
  - [Thanks](#thanks)
  - [License](#license)

## Install

Install PostCSS config and save them to your package.json `devDependencies`:

```sh
npm install --save-dev @giotramu/postcss-config
```

## Usage

Create a `postcss.config.js` file in the root of your project and grab the configuration from the `node_modules` folder like so:

```js
module.exports = require('@giotramu/postcss-config');
```

## Standard config

The config bundles together the following plugins:

- [autoprefixer][autoprefixer-url]
- [cssnano][cssnano-url]
- [postcss-custom-media][postcss-custom-media-url]
- [postcss-inline-svg][postcss-inline-svg-url]
- [postcss-reporter][postcss-reporter-url]
- [svgo][svgo-url]

You can inspect the source code of the [standard config][standard-config-url].

## Extend the config

Install all your favourite [PostCSS plugins][postcss-plugins-url] and save them to your package.json as `devDependencies`. Now you can extend the [standard PostCSS config][standard-config-url], but remember that **the plugins execution order is top-down**:

```js
// postcss.config.js

module.exports = require('@giotramu/postcss-config/extends')([
  'postcss-utilities',
  'postcss-autoreset',
  'postcss-calc',
  [
    'postcss-custom-media',
    {
      importFrom: 'path/to/file.css'
    }
  ],
  ['autoprefixer', false],
  [
    'cssnano',
    {
      preset: [
        'default',
        {
          svgo: false
        }
      ]
    }
  ]
]);
```

By design, the behaviour of the `extends` API is overwriting the existing array values completely rather than concatenating them.

#### Disable plugins

You can disable and not load a single or a bunch of plugins by setting them to `false`:

```js
// postcss.config.js

// Disable a single plugin
module.exports = require('@giotramu/postcss-config/extends')([
  ['autoprefixer', false]
]);

// Turn off multiple plugins
module.exports = require('@giotramu/postcss-config/extends')([
  ['postcss-custom-media', false],
  ['autoprefixer', false],
  ['cssnano', false]
]);
```

## Options

You can pass the following options:

| Option    |                       Type |                           Default |
| --------- | -------------------------: | --------------------------------: |
| browsers  |                 `string[]` | [Browserslist](#browsers-support) |
| debug     |                  `boolean` |                           `false` |
| sourceMap |    `boolean` or `'inline'` |                       `undefined` |
| syntax    | PostCSS `syntax` interface |                       `undefined` |

```js
// postcss.config.js

const options = {
  debug: true,
  browsers: ['> 1%', 'IE 10'],
  sourceMap: 'inline'
};

// The standard way
module.exports = require('@giotramu/postcss-config')(options);

// With extends API
module.exports = require('@giotramu/postcss-config/extends')([...], options);
```

## Browsers support

PostCSS config is dispatched with a default [browserslist query][browserslist-url], used by the [cssnano][cssnano-url] and [autoprefixer][autoprefixer-url] plugins:

```yml
last 2 versions
not ie <= 11
not op_mini all
not dead
not < 0.5%
```

You can change the query when you need. An example:

```js
// postcss.config.js

const browsers = ['> 1%', 'IE 10'];

// The standard way
module.exports = require('@giotramu/postcss-config')({browsers});

// With extends API
module.exports = require('@giotramu/postcss-config/extends')(['Your plugin'], {
  browsers
});
```

## Advanced usage

It's possible to pass a context and decide which configuration to load:

```sh
NODE_ENV=development npm run dev
```

```js
// postcss.config.js

module.exports = ctx =>
  ctx.env === 'development'
    ? require('@giotramu/postcss-config/extends')(
        [
          ['autoprefixer', false],
          ['cssnano', false]
        ],
        {sourceMap: 'inline'}
      )
    : require('@giotramu/postcss-config')({sourceMap: false});
```

## PostCSS Preset Env. Why not?

[PostCSS Preset Env][postcss-preset-env-url] is fantastic, but if you want more control over CSS output and appreciate both the SASS and PostCSS ecosystems, merge them through this config.

## Thanks

- [deepmerge][deepmerge-url]

## License

[MIT License](./LICENSE)

<!-- Badges -->
[bundlephobia-img]: https://img.shields.io/bundlephobia/min/@giotramu/postcss-config?label=bundle%20size&style=flat-square&colorA=141414&colorB=0055FF
[ci-img]: https://img.shields.io/github/workflow/status/giotramu/postcss-config/test%20+%20build?style=flat-square&colorA=141414&colorB=0055FF
[coverage-img]: https://img.shields.io/coveralls/github/giotramu/postcss-config/stable?style=flat-square&colorA=141414&colorB=0055FF
[npm-download-img]: https://img.shields.io/npm/dm/@giotramu/postcss-config?style=flat-square&colorA=141414&colorB=0055FF
[npm-version-img]: https://img.shields.io/npm/v/@giotramu/postcss-config?style=flat-square&colorA=141414&colorB=0055FF

<!-- Links -->
[autoprefixer-url]: https://github.com/postcss/autoprefixer
[browserslist-url]: https://browserl.ist/?q=last+2+versions%2C+not+ie+%3C%3D+11%2C+not+op_mini+all%2C+not+dead%2C+not+%3C+0.5%25
[ci-url]: https://github.com/giotramu/postcss-config/actions
[coverage-url]: https://coveralls.io/github/giotramu/postcss-config
[cssnano-url]: https://github.com/cssnano/cssnano
[deepmerge-url]: https://github.com/TehShrike/deepmerge
[deps-url]: https://david-dm.org/giotramu/postcss-config
[devdeps-url]: https://david-dm.org/giotramu/postcss-config?type=dev
[npm-url]: https://www.npmjs.com/package/@giotramu/postcss-config
[postcss-custom-media-url]: https://github.com/postcss/postcss-custom-media
[postcss-doc-url]: https://postcss.org
[postcss-inline-svg-url]: https://github.com/TrySound/postcss-inline-svg
[postcss-plugins-url]: https://github.com/postcss/postcss/blob/master/docs/plugins.md
[postcss-preset-env-url]: https://github.com/csstools/postcss-preset-env
[postcss-reporter-url]: https://github.com/postcss/postcss-reporter
[standard-config-url]: https://github.com/giotramu/postcss-config/blob/stable/src/tests/_config.ts
[svgo-url]: https://github.com/svg/svgo
