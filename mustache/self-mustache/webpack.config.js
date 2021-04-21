/*
 * @Author: Li Jian
 * @Date: 2021-04-21 15:58:40
 * @LastEditTime: 2021-04-21 16:05:12
 * @LastEditors: Li Jian
 */
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src//index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: false,
    port: 8080,
    publicPath: "/xuni/"
  }
}