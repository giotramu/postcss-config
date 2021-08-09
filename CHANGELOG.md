# Changelog

All notable changes to the project will be documented in this file.

## [4.0.0](https://github.com/giotramu/postcss-config/releases/tag/4.0.0)

**Fixes:**

- ![breaking] Remove `postcss-scss` and `@csstools/postcss-sass` plugins. `@csstools/postcss-sass` is unmantained. Check out the [related issue](https://github.com/csstools/postcss-sass/issues/24). If you need to support the SASS compilation, use the [forked versions](https://www.npmjs.com/package/@mozaic-ds/postcss-sass)
- ![breaking] Remove `postcss-selector-not` plugin for historical [issue](https://github.com/postcss/postcss-selector-not/pull/18) with PostCSS v8

**Features:**

- ![breaking] Support PostCSS v8
- ![breaking] PostCSS is no more a `peerDependency`
- ![breaking] Source Map accept the following option: `true`, `false` and `'inline'` values
- A new option, `syntax`, is available in the configuration. [Read more](https://github.com/postcss/postcss#syntaxes) on the PostCSS documentation.

**Dependencies:**

- Bump the version of `postcss` from `7.0.32` to `8.3.x`
- Bump the version of `autoprefixer` from `9.8.6` to `10.3.1`
- Bump the version of `cssnano` from `4.1.10` to `10.3.1`
- Bump the version of `postcss-custom-media` from `7.0.8` to `8.0.0`
- Bump the version of `postcss-inline-svg` from `4.1.0` to `5.0.0`
- Bump the version of `postcss-reporter` from `6.0.1` to `7.0.2`

## [3.4.5](https://github.com/giotramu/postcss-config/releases/tag/3.4.5)

**Dependencies:**

- Update dependencies

## [3.4.4](https://github.com/giotramu/postcss-config/releases/tag/3.4.4)

**Dependencies:**

- Update dependencies

## [3.4.3](https://github.com/giotramu/postcss-config/releases/tag/3.4.3)

**Fixes:**

- Compile the TypeScript code to support the ECMAScript 2015 syntax. Support for Node version 12.x is guaranteed

## [3.4.2](https://github.com/giotramu/postcss-config/releases/tag/3.4.2)

**Features:**

- Compile the TypeScript code to support the ECMAScript 2020 syntax

## [3.4.1](https://github.com/giotramu/postcss-config/releases/tag/3.4.1)

**Dependencies:**

- Update dependencies

**Internals:**

- Distribute the `CHANGELOG.md` (this file) with NPM and GitHub packages

## [3.4.0](https://github.com/giotramu/postcss-config/releases/tag/3.4.0)

**Internals:**

- Fix some internal APIs
- Increase the test coverage to 100%

**Dependencies:**

- Update dependencies

## [3.3.0](https://github.com/giotramu/postcss-config/releases/tag/3.3.0)

**Dependencies:**

- Update dependencies

## [3.2.0](https://github.com/giotramu/postcss-config/releases/tag/3.2.0)

**Dependencies:**

- Update dependencies

## [3.1.0](https://github.com/giotramu/postcss-config/releases/tag/3.1.0)

**Features:**

- Source Map accept the following option: `true`, `false` and `'external'` values
- Source Map option is disabled by default

**Fixes:**

- Fix files publishing into the package.json

## [3.0.0](https://github.com/giotramu/postcss-config/releases/tag/3.0.0)

**Features:**

- Inject useful options when grabbing or extending the standard configuration
- Add new PostCSS plugins:
  - `postcss-inline-svg`
  - `postcss-selector-not`
- ![breaking] Change the configuration usage
- ![breaking] Change the extends API
- ![breaking] Switch from cssnano's advanced preset to the default one
- ![breaking] Use Autoprefixer as a standalone plugin (not integrated into cssnano anymore)
- ![breaking] Set the Autoprefixer's grid property to `no-autoplace`
- ![breaking] Enable the Source Map by default. You can turn it off when you need through options
- ![breaking] Enable the following SVGO plugins:
  - `removeDimensions`
  - `removeScriptElement`
  - `sortAttrs`
- Update documentation

**Internals:**

- Fix CI configuration

## [2.4.0](https://github.com/giotramu/postcss-config/releases/tag/2.4.0)

**Features:**

- Disable dangerous cssnano optimizations [#39](https://github.com/giotramu/postcss-config/pull/39)

## [2.3.1](https://github.com/giotramu/postcss-config/releases/tag/2.3.1)

**Dependencies:**

- Update dependencies

## [2.3.0](https://github.com/giotramu/postcss-config/releases/tag/2.3.0)

**Features:**

- Disable the cssnano [minifySelectors](https://cssnano.co/optimisations/minifyselectors) and [reduceIdents](https://cssnano.co/optimisations/reduceidents) properties

## [2.2.2](https://github.com/giotramu/postcss-config/releases/tag/2.2.2)

**Features:**

- Publish the package to the GitHub registry

**Internals:**

- Remove `README.md` from distributed files
- Fix some minor stuff, such `README.md`, `.gitignore`, `.prettierignore` and `.eslintignore`

## [2.2.1](https://github.com/giotramu/postcss-config/releases/tag/2.2.1)

**Dependencies:**

- Update dependencies

## [2.1.0](https://github.com/giotramu/postcss-config/releases/tag/2.1.0)

**Features:**

- Add entry point for types

**Fixes:**

- Fix the module's main entry point

**Internals:**

- Improve test coverage

## [2.0.0](https://github.com/giotramu/postcss-config/releases/tag/2.0.0)

**Features:**

- ![breaking] Deprecate expandDefault function and replace with extends
- ![breaking] Rewrite source code in TypeScript
- Update documentation

**Dependencies:**

- Update dependencies

[breaking]: https://shields.io/badge/-breaking-202d3a?style=flat-square
