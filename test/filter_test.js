const ndarray = require('ndarray')
const filter = require('../lib/helpers/filter')
const assert = require('assert')

describe('filter', () => {
  it('3 * 3, size 3', () => {
    let array = (new Array(9)).fill(1).map((v, i) => v + i)
    let pixels = ndarray(array, [3, 3])
    let filtered = filter(pixels, { size: 3 })
    assert.equal(filtered.get(1, 1), 8)
  })

  it('5 * 5, size 3', () => {
    let array = (new Array(25)).fill(1).map((v, i) => v + i)
    let pixels = ndarray(array, [5, 5])
    let filtered = filter(pixels, { size: 3 })
    assert.equal(filtered.get(2, 2), 12)
  })

  it('3 * 3, size 3, reversed', () => {
    let array = (new Array(9)).fill(1).map((v, i) => v + i)
    let pixels = ndarray(array, [3, 3])
    let filtered = filter(pixels, { size: 3, reversed: true })
    assert.equal(filtered.get(1, 1), 255 - 8)
  })
})

/* global describe it */
