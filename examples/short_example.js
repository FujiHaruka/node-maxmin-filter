const fs = require('fs')
const savePixels = require('save-pixels')
const getPixels = require('get-pixels')
const maxminFilter = require('../lib/maxmin_filter')

getPixels('sample.jpg', (err, pixels) => {
  if (err) {
    throw err
  }
  let filtered = maxminFilter(pixels)
  savePixels(filtered, 'png').pipe(fs.createWriteStream('result.png'))
})
