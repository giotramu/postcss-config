# Changelog

All notable changes to the project will be documented in this file.

## [4.4.0]

**Internals:**

- Remove the old entry point for the package by replacing it with the recommended `exports' field. Read more [here](https://nodejs.org/api/packages.html#package-entry-points).
- `autoprefixer` upgraded from `10.4.13` to `10.4.15`
- `postcss` upgraded from `8.4.21` to `8.4.27`
- `postcss-custom-media` upgraded from `9.1.2` to `10.0.0`

## [4.3.0]

**Features:**

- Update `cssnano` to v6

## [4.2.0]

**Internals:**

- `cssnano` upgraded from `5.1.14` to `5.1.15`
- `deepmerge` upgraded from `4.2.2` to `4.3.0`
- `postcss` upgraded from `8.4.20` to `8.4.21`
- `postcss-custom-media` upgraded from `9.0.1` to `9.1.2`
- `postcss-inline-svg` upgraded from `5.0.0` to `6.0.0`

## [4.1.2]

**Internals:**

- `autoprefixer` upgraded from `10.4.8` to `10.4.13`
- `cssnano` upgraded from `5.1.13` to `5.1.14`
- `postcss` upgraded from `8.4.16` to `8.4.18`

## [4.1.1]

**Internals:**

- `autoprefixer` upgraded from `10.4.2` to `10.4.8`
- `cssnano` upgraded from `5.0.14` to `5.1.13`
- `postcss` upgraded from `8.4.5` to `8.4.16`
- `postcss-custom-media` upgraded from `8.0.0` to `8.0.2`
- Drop the support of Node.js v12 and NPM v6 in favor of Node.js v14 and NPM v8

## [4.1.0]

**Internals:**

- `autoprefixer` upgraded from `10.4.0` to `10.4.1`
- `cssnano` upgraded from `5.0.12` to `5.0.14`
- `postcss` upgraded from `8.3.11` to `8.4.5`
- `postcss-reporter` upgraded from `7.0.4` to `7.0.5`

## [4.0.1]

**Internals:**

- `autoprefixer` upgraded from `10.3.4` to `10.3.6`
- `postcss-reporter` upgraded from `7.0.2` to `7.0.3`

## [4.0.0]

**Fixes:**

- ![breaking] Remove `postcss-scss` and `@csstools/postcss-sass` plugins. `@csstools/postcss-sass` is unmantained. Check out the [related issue](https://github.com/csstools/postcss-sass/issues/24). If you need to support the SASS compilation, use the [forked versions](https://www.npmjs.com/package/@mozaic-ds/postcss-sass)
- ![breaking] Remove `postcss-selector-not` plugin for historical [issue](https://github.com/postcss/postcss-selector-not/pull/18) with PostCSS v8

**Features:**

- ![breaking] Support PostCSS v8
- ![breaking] PostCSS is no more a `peerDependency`
- ![breaking] Source Map accept the following option: `true`, `false` and `'inline'` values
- A new option, `syntax`, is available in the configuration. [Read more](https://github.com/postcss/postcss#syntaxes) on the PostCSS documentation

**Internals:**

- `postcss` upgraded from `7.0.32` to `8.3.x`
- `autoprefixer` upgraded from `9.8.6` to `10.3.1`
- `cssnano` upgraded from `4.1.10` to `10.3.1`
- `postcss-custom-media` upgraded from `7.0.8` to `8.0.0`
- `postcss-inline-svg` upgraded from `4.1.0` to `5.0.0`
- `postcss-reporter` upgraded from `6.0.1` to `7.0.2`

## [3.4.5]

**Internals:**

- Update dependencies

## [3.4.4]

**Internals:**

- Update dependencies

## [3.4.3]

**Fixes:**

- Compile the TypeScript code to support the ECMAScript 2015 syntax. Support for Node version 12.x is guaranteed

## [3.4.2]

**Features:**

- Compile the TypeScript code to support the ECMAScript 2020 syntax

## [3.4.1]

**Internals:**

- Distribute the `CHANGELOG.md` (this file) with NPM and GitHub packages
- Update dependencies

## [3.4.0]

**Internals:**

- Fix some internal APIs
- Increase the test coverage to 100%
- Update dependencies

## [3.3.0]

**Internals:**

- Update dependencies

## [3.2.0]

**Internals:**

- Update dependencies

## [3.1.0]

**Fixes:**

- Fix files publishing into the package.json

**Features:**

- Source Map accept the following option: `true`, `false` and `'external'` values
- Source Map option is disabled by default

## [3.0.0]

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

## [2.4.0]

**Features:**

- Disable dangerous cssnano optimizations [#39](https://github.com/giotramu/postcss-config/pull/39)

## [2.3.1]

**Internals:**

- Update dependencies

## [2.3.0]

**Features:**

- Disable the cssnano [minifySelectors](https://cssnano.co/optimisations/minifyselectors) and [reduceIdents](https://cssnano.co/optimisations/reduceidents) properties

## [2.2.2]

**Features:**

- Publish the package to the GitHub registry

**Internals:**

- Remove `README.md` from distributed files
- Fix some minor stuff, such `README.md`, `.gitignore`, `.prettierignore` and `.eslintignore`

## [2.2.1]

**Internals:**

- Update dependencies

## [2.1.0]

**Fixes:**

- Fix the module's main entry point

**Features:**

- Add entry point for types

**Internals:**

- Improve test coverage

## [2.0.0]

**Features:**

- ![breaking] Deprecate expandDefault function and replace with extends
- ![breaking] Rewrite source code in TypeScript
- Update documentation

**Internals:**

- Update dependencies

[4.4.0]: https://github.com/giotramu/postcss-config/releases/tag/4.4.0
[4.3.0]: https://github.com/giotramu/postcss-config/releases/tag/4.3.0
[4.2.0]: https://github.com/giotramu/postcss-config/releases/tag/4.2.0
[4.1.2]: https://github.com/giotramu/postcss-config/releases/tag/4.1.2
[4.1.1]: https://github.com/giotramu/postcss-config/releases/tag/4.1.1
[4.1.0]: https://github.com/giotramu/postcss-config/releases/tag/4.1.0
[4.0.1]: https://github.com/giotramu/postcss-config/releases/tag/4.0.1
[4.0.0]: https://github.com/giotramu/postcss-config/releases/tag/4.0.0
[3.4.5]: https://github.com/giotramu/postcss-config/releases/tag/3.4.5
[3.4.4]: https://github.com/giotramu/postcss-config/releases/tag/3.4.4
[3.4.3]: https://github.com/giotramu/postcss-config/releases/tag/3.4.3
[3.4.2]: https://github.com/giotramu/postcss-config/releases/tag/3.4.2
[3.4.1]: https://github.com/giotramu/postcss-config/releases/tag/3.4.1
[3.4.0]: https://github.com/giotramu/postcss-config/releases/tag/3.4.0
[3.3.0]: https://github.com/giotramu/postcss-config/releases/tag/3.3.0
[3.2.0]: https://github.com/giotramu/postcss-config/releases/tag/3.2.0
[3.1.0]: https://github.com/giotramu/postcss-config/releases/tag/3.1.0
[3.0.0]: https://github.com/giotramu/postcss-config/releases/tag/3.0.0
[2.4.0]: https://github.com/giotramu/postcss-config/releases/tag/2.4.0
[2.3.1]: https://github.com/giotramu/postcss-config/releases/tag/2.3.1
[2.3.0]: https://github.com/giotramu/postcss-config/releases/tag/2.3.0
[2.2.2]: https://github.com/giotramu/postcss-config/releases/tag/2.2.2
[2.2.1]: https://github.com/giotramu/postcss-config/releases/tag/2.2.1
[2.1.0]: https://github.com/giotramu/postcss-config/releases/tag/2.1.0
[2.0.0]: https://github.com/giotramu/postcss-config/releases/tag/2.0.0
[breaking]: https://shields.io/badge/-breaking-FFFACD?style=flat-square
