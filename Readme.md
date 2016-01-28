
# popcount

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Population count (aka hamming weight) function. Counts the number of set (i.e. 1-valued) bits in a 32-bit integer.

## Installation

    $ npm install @f/popcount

## Usage

```js
var popcount = require('@f/popcount')

popcount(3) === 2
popcount(4) === 1
popcount(0xFF) === 8
popcount(0xFF, 3) === 3
```

## API

### popcount(x, n)

- `x` - The 32-bit integer who's population you wish to count
- `n` - Optional. The bit position to begin the count from. E.g. `popcount(x, 8)` returns the number of bits set below the 8th bit in `x`.

**Returns:** The number of bits set in `x` below the nth position, if n is specified.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/popcount.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/popcount
[git-image]: https://img.shields.io/github/tag/micro-js/popcount.svg
[git-url]: https://github.com/micro-js/popcount
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/popcount.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/popcount
