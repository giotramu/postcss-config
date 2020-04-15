# PostCSS Config

Flexible [PostCSS][postcss-doc] config with great defaults. Lets you use **Dart SASS/SCSS** as PostCSS plugin.

[![NPM][npm-badge]][npm]
[![Build Status][ci-badge]][ci]
[![Code Coverage][coverage-badge]][coverage]
[![Dependencies][deps-badge]][deps]
[![Dev Dependencies][devdeps-badge]][devdeps]

## Table of contents

- [PostCSS Config](#postcss-config)
  - [Install](#install)
  - [Usage](#usage)
  - [The default config](#the-default-config)
  - [Extend the config](#extend-the-config)
  - [Browsers support](#browsers-support)
  - [Thanks](#thanks)
  - [License](#license)

## Install

Install PostCSS config and save them to your package.json `devDependencies`:

```sh
npm install @giotramu/postcss-config --save-dev
```

## Usage

Create a `.postcssrc.js` or `postcss.config.js` file in the project root and grab the default config from node_modules folder:

```js
module.exports = require('@giotramu/postcss-config').getDefault();
```

## The default config

The config bundles together the following plugins:

- [autoprefixer]
- [cssnano]
- [postcss-custom-media]
- [postcss-reporter]
- [postcss-sass]

You can inspect the source code of the [default config][default-config].

## Extend the config

Install all your favourite [PostCSS plugins][postcss-plugins] and save them to your package.json as `devDependencies`. Now you can extend the [default PostCSS config][default-config], but remember that **the plugins execution order is top-down**:

```js
module.exports = require('@giotramu/postcss-config').extends({
  map: true,
  plugins: {
    'postcss-import': true,
    'postcss-calc': true,
    'postcss-custom-selectors': {
      preserve: true
    }
  }
});
```

By design, the behaviour of the `extends` method is overwriting the existing array values completely rather than concatenating them.

#### Disable the plugins

You can disable and not load a single or a bunch of plugins by setting them to `false`:

```js
module.exports = require('@giotramu/postcss-config').extends({
  plugins: {
    cssnano: false
  }
});
```

## Browsers support

PostCSS config is dispatched with a specific [browserslist] query:

```yml
last 2 versions
not ie <= 11
not op_mini all
not dead
not < 0.5%
```

You can change the query when you need:

```js
//--- Grab default config
module.exports = require('@giotramu/postcss-config').setBrowsers(['> 1%', 'IE 10']).getDefault();

//--- Extends default config
module.exports = require('@giotramu/postcss-config').setBrowsers(['> 1%', 'IE 10']).extends({...});
```

## Thanks

- [deepmerge]
- [postcss-load-config]

## License

[MIT License](./LICENSE)

<!---
  B A D G E S
-->

[ci-badge]: https://github.com/giotramu/postcss-config/workflows/test%20and%20build/badge.svg?branch=master
[coverage-badge]: https://badgen.net/coveralls/c/github/giotramu/postcss-config/master
[deps-badge]: https://badgen.net/david/dep/giotramu/postcss-config
[devdeps-badge]: https://badgen.net/david/dev/giotramu/postcss-config
[npm-badge]: https://badgen.net/npm/v/@giotramu/postcss-config?icon=npm&label=npm%20package

<!---
  L I N K S
-->

[autoprefixer]: https://github.com/postcss/autoprefixer
[browserslist]: https://github.com/browserslist/browserslist
[ci]: https://github.com/giotramu/postcss-config/actions
[coverage]: https://coveralls.io/github/giotramu/postcss-config
[cssnano]: https://github.com/cssnano/cssnano
[deepmerge]: https://github.com/TehShrike/deepmerge
[default-config]: ./src/config.ts
[deps]: https://david-dm.org/giotramu/postcss-config
[devdeps]: https://david-dm.org/giotramu/postcss-config?type=dev
[npm]: https://www.npmjs.com/package/@giotramu/postcss-config
[postcss-custom-media]: https://github.com/postcss/postcss-custom-media
[postcss-doc]: https://postcss.org
[postcss-load-config]: https://github.com/michael-ciniawsky/postcss-load-config
[postcss-plugins]: https://github.com/postcss/postcss/blob/master/docs/plugins.md
[postcss-reporter]: https://github.com/postcss/postcss-reporter
[postcss-sass]: https://github.com/jonathantneal/postcss-sass
