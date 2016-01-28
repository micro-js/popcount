/**
 * Imports
 */

var popcount = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(popcount(1), 1)
  t.equal(popcount(0xFF), 8)
  t.equal(popcount(0xFF, 3), 3)
  t.end()
})
