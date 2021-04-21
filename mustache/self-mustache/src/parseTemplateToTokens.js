/*
 * @Author: Li Jian
 * @Date: 2021-04-21 17:08:20
 * @LastEditTime: 2021-04-21 17:22:17
 * @LastEditors: Li Jian
 */
import Scanner from './Scanner'
export default function parseTemplateToTokens(templateStr) {
  let tokens = []

  const scanner = new Scanner(templateStr)
  let words

  while(!scanner.eos()) {
    words = scanner.scanUtil('{{')
    tokens.push(['text', words])
    if (words != '') {
      words = scanner.scan('{{')
    }
    words = scanner.scanUtil('}}')
    if (words != '') {
      if (words[0] == '#') {
        tokens.push(['#', words.substring(1)])
      } else if (words[0] == '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['name', words])
      }
    }
    words = scanner.scan('}}')
  }

  return tokens
}