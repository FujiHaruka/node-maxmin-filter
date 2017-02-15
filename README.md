# node-maxmin-filter

Max-Min filter of image implemented in JavaScript. Both in Node.js and browser.

+ [Demo](https://fujiharuka.github.io/node-maxmin-filter/demo.html)

## Install

```
$ npm install maxmin-filter
```

## Usage

I made it as an [ndarray](https://github.com/scijs/ndarray) module. So, the simplest usage is with [get-pixels](https://github.com/scijs/get-pixels) and [save-pixels](https://github.com/scijs/save-pixels) as below.

See [examples]('./examples') for more.

```js
const fs = require('fs')
const savePixels = require('save-pixels')
const getPixels = require('get-pixels')
const maxminFilter = require('maxmin-filter')

getPixels('src.png', (err, pixels) => {
  if (err) {
    throw err
  }
  let filtered = maxminFilter(pixels)
  savePixels(filtered, 'png').pipe(fs.createWriteStream('dist.png'))
})
```
