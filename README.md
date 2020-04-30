# PostCSS Config

Flexible [PostCSS][postcss-doc-url] config with great defaults. Combine **Dart SCSS** with your favorite PostCSS plugins.

[![NPM][npm-img]][npm-url]
[![Build Status][ci-img]][ci-url]
[![Coverage Status][coverage-img]][coverage-url]
[![Dependencies][deps-img]][deps-url]
[![Dev Dependencies][devdeps-img]][devdeps-url]

## Table of contents

- [PostCSS Config](#postcss-config)
  - [Install](#install)
  - [Usage](#usage)
  - [Standard config](#standard-config)
  - [Extend the config](#extend-the-config)
  - [Browsers support](#browsers-support)
  - [Options](#options)
  - [Thanks](#thanks)
  - [License](#license)

## Install

Install PostCSS config and save them to your package.json `devDependencies`:

```sh
npm install @giotramu/postcss-config --save-dev
```

## Usage

Create a `.postcssrc.js` or `postcss.config.js` file in the project root and grab the standard config from node_modules folder:

```js
module.exports = require('@giotramu/postcss-config');
```

## Standard config

The config bundles together the following plugins:

- [autoprefixer][autoprefixer-url]
- [cssnano][cssnano-url]
- [postcss-custom-media][postcss-custom-media-url]
- [postcss-reporter][postcss-reporter-url]
- [postcss-sass][postcss-sass-url]
- [postcss-selector-not][postcss-selector-not-url]

You can inspect the source code of the [standard config][standard-config-url].

## Extend the config

Install all your favourite [PostCSS plugins][postcss-plugins-url] and save them to your package.json as `devDependencies`. Now you can extend the [standard PostCSS config][standard-config-url], but remember that **the plugins execution order is top-down**:

```js
module.exports = require('@giotramu/postcss-config/extends')({
  'postcss-calc': true,
  'postcss-custom-selectors': {
    preserve: false
  }
});
```

By design, the behaviour of the `extends` api is overwriting the existing array values completely rather than concatenating them.

#### Disable the plugins

You can disable and not load a single or a bunch of plugins by setting them to `false`:

```js
module.exports = require('@giotramu/postcss-config/extends')({
  cssnano: false
});
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
module.exports = require('@giotramu/postcss-config')({
  browsers: ['> 1%', 'IE 10']
});
```

## Options

You can pass the following options:

| Option    |    Type    |                                 Default |
| --------- | :--------: | --------------------------------------: |
| browsers  | `string[]` | [\#browsers-support](#browsers-support) |
| debug     | `boolean`  |                                 `false` |
| sourceMap | `boolean`  |                       `{inline: false}` |

```js
const options = {
  debug: true,
  browsers: ['> 1%', 'IE 10'],
  sourceMap: false
};

// the standard way
module.exports = require('@giotramu/postcss-config')(options);

// with extends api
module.exports = require('@giotramu/postcss-config/extends')({...}, options);
```

## Thanks

- [deepmerge][deepmerge-url]

## License

[MIT License](./LICENSE)

<!---
  B A D G E S
-->

[ci-img]: https://github.com/giotramu/postcss-config/workflows/test%20and%20build/badge.svg?branch=master
[coverage-img]: https://coveralls.io/repos/github/giotramu/postcss-config/badge.svg?branch=master
[deps-img]: https://badgen.net/david/dep/giotramu/postcss-config
[devdeps-img]: https://badgen.net/david/dev/giotramu/postcss-config
[npm-img]: https://badgen.net/npm/v/@giotramu/postcss-config?icon=npm&label=npm%20package

<!---
  L I N K S
-->

[autoprefixer-url]: https://github.com/postcss/autoprefixer
[browserslist-url]: https://browserl.ist/?q=last+2+versions%2C+not+ie+%3C%3D+11%2C+not+op_mini+all%2C+not+dead%2C+not+%3C+0.5%25
[ci-url]: https://github.com/giotramu/postcss-config/actions
[coverage-url]: https://coveralls.io/github/giotramu/postcss-config
[cssnano-url]: https://github.com/cssnano/cssnano
[deepmerge-url]: https://github.com/TehShrike/deepmerge
[standard-config-url]: ./test/_config.ts
[deps-url]: https://david-dm.org/giotramu/postcss-config
[devdeps-url]: https://david-dm.org/giotramu/postcss-config?type=dev
[npm-url]: https://www.npmjs.com/package/@giotramu/postcss-config
[postcss-custom-media-url]: https://github.com/postcss/postcss-custom-media
[postcss-doc-url]: https://postcss.org
[postcss-plugins-url]: https://github.com/postcss/postcss/blob/master/docs/plugins.md
[postcss-reporter-url]: https://github.com/postcss/postcss-reporter
[postcss-sass-url]: https://github.com/jonathantneal/postcss-sass
[postcss-selector-not-url]: https://github.com/postcss/postcss-selector-not
