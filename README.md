# PostCSS Config

Flexible [PostCSS][postcss-doc] config with great defaults. Lets you use **Dart SASS/SCSS** as PostCSS plugin.

[![npm package][npm-badge]][npm]
[![build status][circleci-badge]][circleci]
[![code coverage][codecov-badge]][codecov]
[![dependencies][deps-badge]][deps]
[![dev-dependencies][dev-deps]][david-dev]

## Table of contents

- [PostCSS config](#postcss-config)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [The default config](#the-default-config)
  - [Extends the config](#extends-the-config)
  - [Browsers](#browsers)
  - [Related project](#Related-project)
  - [Thanks](#thanks)
  - [Licence](#licence)

## Install

Install PostCSS config and save them to your **package.json** `devDependencies`:

```bash
$ npm i -D @giotramu/postcss-config
```

## Usage

Create a `.postcssrc.js` or `postcss.config.js` file in the project root and grab the default config from node_modules folder:

```js
module.exports = require('@giotramu/postcss-config').getDefault();
```

## The default config

The config bundle together the following plugins:

- [autoprefixer]
- [cssnano]
- [postcss-custom-media]
- [postcss-reporter]
- [postcss-sass]

You can inspect the source code of the [default config][default-config].

## Extends the config

Install all your favourite [PostCSS plugins][postcss-plugins] and save them to your **package.json** as `devDependencies`.
Then extends the [default PostCSS config][default-config] with the following syntax:

```js
module.exports = require('@giotramu/postcss-config').extends({
  map: true,
  plugins: {
    'postcss-import': true,
    'postcss-calc': true,
    'postcss-custom-selectors': {
      preserve: true
    }
    // ...
  }
});
```

By design, the behaviour of the `extends` method is overwriting the existing array values completely rather than concatenating them.

## Plugins

Plugin **execution order** is top-down. You can disable and not load a single or a bunch of plugins by setting them to `false`:

```js
module.exports = require('@giotramu/postcss-config').extends({
  plugins: {
    cssnano: false
  }
});
```

## Browsers

PostCSS config is dispatched with a specific [browserslist] query:

```yml
last 2 versions
not ie <= 11
not op_mini all
not dead
not < 0.5%
```

You can change it when you need:

```js
//--- Grab default config
module.exports = require('@giotramu/postcss-config').setBrowsers(['> 1%', 'IE 10']).getDefault();

//--- Extends default config
module.exports = require('@giotramu/postcss-config').setBrowsers(['> 1%', 'IE 10']).extends({...});
```

## Related project

- [stylelint-config]

## Thanks

- [deepmerge]
- [postcss-load-config]

## Licence

MIT

[npm]: https://www.npmjs.com/package/@giotramu/postcss-config
[npm-badge]: https://badgen.net/npm/v/@giotramu/postcss-config
[circleci]: https://circleci.com/gh/giotramu/postcss-config
[circleci-badge]: https://badgen.net/circleci/github/giotramu/postcss-config?icon=circleci&label=circleci
[codecov]: https://codecov.io/gh/giotramu/postcss-config
[codecov-badge]: https://badgen.net/codecov/c/github/giotramu/postcss-config?icon=codecov&label=codecov
[deps]: https://david-dm.org/giotramu/postcss-config
[deps-badge]: https://badgen.net/david/dep/giotramu/postcss-config
[david-dev]: https://david-dm.org/giotramu/postcss-config?type=dev
[dev-deps]: https://badgen.net/david/dev/giotramu/postcss-config
[browserslist]: https://github.com/browserslist/browserslist
[default-config]: ./src/config.ts
[autoprefixer]: https://github.com/postcss/autoprefixer
[cssnano]: https://github.com/cssnano/cssnano
[postcss-custom-media]: https://github.com/postcss/postcss-custom-media
[postcss-doc]: https://postcss.org
[postcss-load-config]: https://github.com/michael-ciniawsky/postcss-load-config
[postcss-plugins]: https://github.com/postcss/postcss/blob/master/docs/plugins.md
[postcss-reporter]: https://github.com/postcss/postcss-reporter
[postcss-sass]: https://github.com/jonathantneal/postcss-sass
[stylelint-config]: https://github.com/giotramu/stylelint-config
[deepmerge]: https://github.com/TehShrike/deepmerge
