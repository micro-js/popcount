/**
 * Expose popcount
 */

module.exports = popcount

/**
 * popcount
 */

function popcount (x, n) {
  if (n !== undefined) {
    x &= (1 << n) - 1
  }

  x -= x >> 1 & 0x55555555
  x = (x & 0x33333333) + (x >> 2 & 0x33333333)
  x = x + (x >> 4) & 0x0f0f0f0f
  x += x >> 8
  x += x >> 16

  return x & 0x7f
}
