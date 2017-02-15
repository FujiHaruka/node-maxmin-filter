const zeros = require('zeros')

/**
 * Calculate max-min filter pixels
 */
function filter (pixels, { size, reversed }) {
  // pixels is expected to be grayscaled
  let [width, height] = pixels.shape
  let edge = Math.floor(size / 2)
  let xEnd = width - edge
  let yEnd = height - edge
  let res = zeros(pixels.shape)
  for (let x = edge; x < xEnd; x++) {
    for (let y = edge; y < yEnd; y++) {
      let [max, min] = maxMin(pixels, x, y, edge)
      let dif = max - min
      res.set(x, y, dif)
    }
  }
  if (reversed) {
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let value = 255 - res.get(x, y)
        res.set(x, y, value)
      }
    }
  }
  return res
}

function maxMin (pixels, centerX, centerY, edge) {
  let xEnd = centerX + edge + 1
  let yEnd = centerY + edge + 1
  let max = 0
  let min = 255
  for (let x = centerX - edge; x < xEnd; x++) {
    for (let y = centerY - edge; y < yEnd; y++) {
      let pixel = pixels.get(x, y)
      if (pixel > max) {
        max = pixel
      }
      if (pixel < min) {
        min = pixel
      }
    }
  }
  return [max, min]
}

module.exports = filter
