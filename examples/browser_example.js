const maxminFilter = require('../lib/maxmin_filter')
const getPixels = require('get-pixels')
const savePixels = require('save-pixels')
const IMG_URL = 'sample.jpg'

function drawCanvas (options) {
  getPixels(IMG_URL, (err, pixels) => {
    if (err) {
      window.alert('Error.')
      throw err
    }
    let filtered = maxminFilter(pixels, options)
    let canvas = savePixels(filtered, 'canvas') // returns canvas element
    let canvasWrap = document.querySelector('#canvas-wrap')
    canvasWrap.removeChild(canvasWrap.firstChild)
    canvasWrap.appendChild(canvas)
  })
}

window.addEventListener('load', () => {
  // Initial image
  let canvasWrap = document.querySelector('#canvas-wrap')
  let img = new Image()
  img.src = IMG_URL
  canvasWrap.appendChild(img)

  // Add click event
  let button = document.querySelector('#filter-button')
  button.addEventListener('click', (e) => {
    e.preventDefault()
    let sizeInput = document.querySelector('#option-size')
    let size = Number(sizeInput.value)
    drawCanvas({ size })
  })
})

/* global Image */
