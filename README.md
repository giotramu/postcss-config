# PostCSS Config

> ⚠️ The project will no longer be updated, but I am here to help with any concerns.

Flexible [PostCSS][postcss-doc_url] config that combines useful plugins like Autoprefixer, CSSNano, SVGO, Inline SVG, Custom Media, etc. It offers granular control instead of postcss-preset-env.

[![NPM Version][npm_version_badge]][npm_url]
[![NPM Downloads][npm_downloads_badge]][npm_url]

- [PostCSS Config](#postcss-config)
  - [Install](#install)
  - [Usage](#usage)
  - [Standard config](#standard-config)
  - [Extend the config](#extend-the-config)
      - [Disable plugins](#disable-plugins)
  - [Options](#options)
  - [Browsers support](#browsers-support)
  - [Advanced usage](#advanced-usage)
  - [Acknowledgments](#acknowledgments)
  - [License](#license)

## Install

Install the PostCSS config and save them to your package.json `devDependencies`:

```sh
npm add --save-dev @giotramu/postcss-config
```

## Usage

Create a `postcss.config.cjs` file in the root of your project and grab the configuration from the `node_modules` folder like so:

```js
module.exports = require('@giotramu/postcss-config')
```

## Standard config

The config bundles together the following plugins:

- [autoprefixer][autoprefixer_url]
- [cssnano][cssnano_url]
- [postcss-custom-media][postcss-custom-media_url]
- [postcss-inline-svg][postcss-inline-svg_url]
- [postcss-reporter][postcss-reporter_url]
- [svgo][svgo_url]

You can inspect the source code of the [standard config][standard-config_url].

## Extend the config

Install all your favourite [PostCSS plugins][postcss-plugins_url] and save them to your package.json as `devDependencies`. Now you can extend the [standard PostCSS config][standard-config_url], but remember that **the plugins execution order is top-down**:

```js
// postcss.config.cjs

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
])
```

By design, the behaviour of the `extends` API is overwriting the existing array values completely rather than concatenating them.

#### Disable plugins

You can disable and not load a single or a bunch of plugins by setting them to `false`:

```js
// postcss.config.cjs

// Disable a single plugin
module.exports = require('@giotramu/postcss-config/extends')([
  ['autoprefixer', false]
])

// Turn off multiple plugins
module.exports = require('@giotramu/postcss-config/extends')([
  ['postcss-custom-media', false],
  ['autoprefixer', false],
  ['cssnano', false]
])
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
// postcss.config.cjs

const options = {
  debug: true,
  browsers: ['> 1%', 'IE 10'],
  sourceMap: 'inline'
}

// The standard way
module.exports = require('@giotramu/postcss-config')(options)

// With extends API
module.exports = require('@giotramu/postcss-config/extends')([...], options)
```

## Browsers support

PostCSS config is dispatched with a default [browserslist query][browserslist_url], used by the [cssnano][cssnano_url] and [autoprefixer][autoprefixer_url] plugins:

```yml
last 2 versions
not ie <= 11
not op_mini all
not dead
not < 0.5%
```

You can change the query when you need. An example:

```js
// postcss.config.cjs

const browsers = ['> 1%', 'IE 10']

// The standard way
module.exports = require('@giotramu/postcss-config')({ browsers })

// With extends API
module.exports = require('@giotramu/postcss-config/extends')(['Your plugin'], {
  browsers
})
```

## Advanced usage

It's possible to pass a context and decide which configuration to load:

```sh
NODE_ENV=development npm run dev
```

```js
// postcss.config.cjs

module.exports = ctx =>
  ctx.env === 'development'
    ? require('@giotramu/postcss-config/extends')(
        [
          ['autoprefixer', false],
          ['cssnano', false]
        ],
        { sourceMap: 'inline' }
      )
    : require('@giotramu/postcss-config')({ sourceMap: false })
```

## Acknowledgments

Thanks to the following projects for their contributions:

- [deepmerge][deepmerge_url]

## License

[Apache License 2.0](./LICENSE)

<!-- Badges -->

[npm_downloads_badge]: https://img.shields.io/npm/dm/@giotramu/postcss-config?style=flat-square&colorA=313133&colorB=4169E1
[npm_version_badge]: https://img.shields.io/npm/v/@giotramu/postcss-config?style=flat-square&colorA=313133&colorB=4169E1

<!-- Links -->

[autoprefixer_url]: https://github.com/postcss/autoprefixer
[browserslist_url]: https://browserl.ist/?q=last+2+versions%2C+not+ie+%3C%3D+11%2C+not+op_mini+all%2C+not+dead%2C+not+%3C+0.5%25
[cssnano_url]: https://github.com/cssnano/cssnano
[deepmerge_url]: https://github.com/TehShrike/deepmerge
[npm_url]: https://www.npmjs.com/package/@giotramu/postcss-config
[postcss-custom-media_url]: https://github.com/postcss/postcss-custom-media
[postcss-doc_url]: https://postcss.org
[postcss-inline-svg_url]: https://github.com/TrySound/postcss-inline-svg
[postcss-plugins_url]: https://github.com/postcss/postcss/blob/master/docs/plugins.md
[postcss-preset-env_url]: https://github.com/csstools/postcss-preset-env
[postcss-reporter_url]: https://github.com/postcss/postcss-reporter
[standard-config_url]: https://github.com/giotramu/postcss-config/blob/stable/src/tests/_config.ts
[svgo_url]: https://github.com/svg/svgo
