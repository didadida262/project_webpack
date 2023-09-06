
const path = require('path')
module.exports = {
  // entry: path.join(__dirname, './mywebpackentry.js'),
  entry: './index.js',
  output: {
    // path: path.resolve(__dirname, 'mydist'),
    path: 'mydist',
    filename: 'bundle.js'
  },
}
