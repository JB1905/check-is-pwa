# [check-is-pwa](https://github.com/JB1905/check-is-pwa)

[![NPM version](https://img.shields.io/npm/v/check-is-pwa?style=flat-square)](https://www.npmjs.com/package/check-is-pwa)
[![NPM downloads](https://img.shields.io/npm/dm/check-is-pwa?style=flat-square)](https://www.npmjs.com/package/check-is-pwa)
[![NPM license](https://img.shields.io/npm/l/check-is-pwa?style=flat-square)](https://www.npmjs.com/package/check-is-pwa)
[![All Contributors](https://img.shields.io/github/all-contributors/JB1905/check-is-pwa?style=flat-square)](#contributors-)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/check-is-pwa?style=flat-square)](https://codecov.io/gh/JB1905/check-is-pwa)
[![Travis](https://img.shields.io/travis/JB1905/check-is-pwa/master?style=flat-square)](https://travis-ci.org/JB1905/check-is-pwa)
[![Bundle size](https://img.shields.io/bundlephobia/min/check-is-pwa?style=flat-square)](https://bundlephobia.com/result?p=check-is-pwa)

## About ℹ️

Check if app is running as PWA

## How to Install 💾

First, install the library in your project by npm:

```sh
$ npm install check-is-pwa
```

Or Yarn:

```sh
$ yarn add check-is-pwa
```

## Getting Started 🏁

Connect libary to project:

```js
import { checkIsPwa, isPwa, checkIsNotPwa, isNotPwa } from 'check-is-pwa';
```

Next use library:

```js
const status = checkIsPwa();
```

## Example

```js
// app is running as PWA

checkIsPwa() // true
isPwa // true

checkIsNotPwa() // false
isNotPwa // false
```

```js
// app is NOT running as PWA / running in SSR

checkIsPwa() // false
isPwa // false

checkIsNotPwa() // true
isNotPwa // true
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jb1905.github.io/portfolio/"><img src="https://avatars2.githubusercontent.com/u/28870390?v=4" width="100px;" alt=""/><br /><sub><b>Jakub Biesiada</b></sub></a><br /><a href="https://github.com/JB1905/check-is-pwa/commits?author=JB1905" title="Code">💻</a> <a href="https://github.com/JB1905/check-is-pwa/commits?author=JB1905" title="Tests">⚠️</a> <a href="https://github.com/JB1905/check-is-pwa/commits?author=JB1905" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License 🔱

This project is licensed under the MIT License © 2020-present Jakub Biesiada
