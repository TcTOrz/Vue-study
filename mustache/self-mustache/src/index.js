/*
 * @Author: Li Jian
 * @Date: 2021-04-21 16:01:36
 * @LastEditTime: 2021-04-21 17:10:14
 * @LastEditors: Li Jian
 */
// import Scanner from './Scanner'
import parseTemplateToTokens from './parseTemplateToTokens'

window.templateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplateToTokens(templateStr)
    console.log(tokens);
    // const scanner = new Scanner(templateStr)
    // while (!scanner.eos()) {
    //   let word = scanner.scanUtil('{{')
    //   console.log(word);
    //   scanner.scan('{{')
    //   word = scanner.scanUtil('}}')
    //   console.log(word);
    //   scanner.scan('}}')
    // }
  }
}
