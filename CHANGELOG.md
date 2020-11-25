# Change Log

All notable changes to the project will be documented in this file.

## 3.4.3 (2020-11-25)

### Added

--

### Changed

- Compile the TypeScript code to support the ECMAScript 2015 syntax

### Fixed

--

---

## 3.4.2 (2020-11-24)

### Added

--

### Changed

- Compile the TypeScript code to support the ECMAScript 2020 syntax

### Fixed

--

---

## 3.4.1 (2020-11-22)

### Added

- Distribute the `CHANGELOG.md` (this file) with NPM and GitHub packages

### Changed

- Update dependencies

### Fixed

--

---

## 3.4.0 (2020-09-10)

### Added

--

### Changed

- Fix some internal APIs
- Update project dependencies

### Fixed

- Increase the test coverage to 100%

---

## 3.3.0 (2020-05-25)

### Added

--

### Changed

- Update project dependencies

### Fixed

--

---

## 3.2.0 (2020-05-12)

### Added

--

### Changed

- Update project dependencies

### Fixed

--

---

## 3.1.0 (2020-05-05)

### Added

- Source Map option accept `true`, `false` and `'external'` values

### Changed

- Source Map option is disabled by default

### Fixed

- Fix files publishing into the package.json

---

## 3.0.0 (2020-05-04)

### Added

- Inject useful options when grabbing or extending the standard configuration
- Add new PostCSS plugins:
  - `postcss-inline-svg`
  - `postcss-selector-not`

### Changed

- Change the configuration usage
- Change the extends API
- Switch from cssnano's advanced preset to the default one
- Use Autoprefixer as a standalone plugin (not integrated into cssnano anymore)
- Set the Autoprefixer's grid property to `no-autoplace`
- Enable the Source Map by default. You can turn it off when you need through options
- Enable the following SVGO plugins:
  - `removeDimensions`
  - `removeScriptElement`
  - `sortAttrs`

### Fixed

- Update documentation
- Fix CI configuration

---

## 2.4.0 (2020-04-23)

### Added

--

### Changed

--

### Fixed

- Disable dangerous cssnano optimizations [#39](https://github.com/giotramu/postcss-config/pull/39)

---

## 2.3.1 (2020-04-14)

### Added

--

### Changed

- Update project dependencies

### Fixed

--

---

## 2.3.0 (2020-04-10)

### Added

--

### Changed

- Disable the cssnano [minifySelectors](https://cssnano.co/optimisations/minifyselectors) and [reduceIdents](https://cssnano.co/optimisations/reduceidents) properties

### Fixed

--

---

## 2.2.2 (2020-04-02)

### Added

- Publish the package to the GitHub registry
- Remove `README.md` from distributed files

### Changed

--

### Fixed

- Fix some minor stuff, such `README.md`, `.gitignore`, `.prettierignore` and `.eslintignore`

---

## 2.2.1 (2020-03-24)

### Added

--

### Changed

- Update project dependencies

### Fixed

--

---

## 2.1.0 (2020-02-08)

### Added

- Add entry point for types

### Changed

- Improve test coverage

### Fixed

- Fix the module's main entry point

---

## 2.0.0 (2020-02-03)

### Added

--

### Changed

- Deprecate expandDefault function and replace with extends
- Rewrite source code in TypeScript
- Update dependencies
- Update documentation

### Fixed

--
