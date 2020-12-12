# Change Log

All notable changes to the project will be documented in this file.

## 3.4.4 (2020-12-12)

- Update dependencies

---

## 3.4.3 (2020-11-25)

- Compile the TypeScript code to support the ECMAScript 2015 syntax. Support for Node version 12.x is guaranteed

---

## 3.4.2 (2020-11-24)

- Compile the TypeScript code to support the ECMAScript 2020 syntax

---

## 3.4.1 (2020-11-22)

- Distribute the `CHANGELOG.md` (this file) with NPM and GitHub packages
- Update dependencies

---

## 3.4.0 (2020-09-10)

- Fix some internal APIs
- Update dependencies
- Increase the test coverage to 100%

---

## 3.3.0 (2020-05-25)

- Update dependencies

---

## 3.2.0 (2020-05-12)

- Update dependencies

---

## 3.1.0 (2020-05-05)

- Source Map option accept `true`, `false` and `'external'` values
- Source Map option is disabled by default
- Fix files publishing into the package.json

---

## 3.0.0 (2020-05-04)

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
- Fix CI configuration

---

## 2.4.0 (2020-04-23)

- Disable dangerous cssnano optimizations [#39](https://github.com/giotramu/postcss-config/pull/39)

---

## 2.3.1 (2020-04-14)

- Update dependencies

---

## 2.3.0 (2020-04-10)

- Disable the cssnano [minifySelectors](https://cssnano.co/optimisations/minifyselectors) and [reduceIdents](https://cssnano.co/optimisations/reduceidents) properties

---

## 2.2.2 (2020-04-02)

- Publish the package to the GitHub registry
- Remove `README.md` from distributed files
- Fix some minor stuff, such `README.md`, `.gitignore`, `.prettierignore` and `.eslintignore`

---

## 2.2.1 (2020-03-24)

- Update dependencies

---

## 2.1.0 (2020-02-08)

- Add entry point for types
- Improve test coverage
- Fix the module's main entry point

---

## 2.0.0 (2020-02-03)

- ![breaking] Deprecate expandDefault function and replace with extends
- ![breaking] Rewrite source code in TypeScript
- Update dependencies
- Update documentation

[breaking]: https://shields.io/badge/-breaking-202d3a?style=flat-square
