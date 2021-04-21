/*
 * @Author: Li Jian
 * @Date: 2021-04-19 14:24:18
 * @LastEditTime: 2021-04-19 14:37:56
 * @LastEditors: Li Jian
 */
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "xuni",
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    contentBase: "www",
  },
};