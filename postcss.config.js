/*
 * @Author: Hhvcg
 * @Date: 2022-02-20 15:26:48
 * @LastEditors: Hhvcg
 */
const autoprefixer =require('autoprefixer')
module.exports = {
  plugins: [
    [
      // require('autoprefixer')
      autoprefixer({
        // browsers: ['last 5 version']
        // overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
      }),
      // 'postcss-preset-env',

    ]
  ]
}
