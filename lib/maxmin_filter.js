const grayscale = require('./helpers/grayscale')
const filter = require('./helpers/filter')

function maxminFilter (pixels, options = {}) {
  let {
    size = 3,
    reversed = false
  } = options
  if (typeof size !== 'number' || size % 2 === 0) {
    throw new Error(`"options.size" must be an odd number, but given ${size}`)
  }
  let grayscaled = grayscale(pixels)
  let res = filter(grayscaled, { size, reversed })
  return res
}

module.exports = maxminFilter
