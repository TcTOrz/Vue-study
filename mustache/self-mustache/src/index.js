/*
 * @Author: Li Jian
 * @Date: 2021-04-21 16:01:36
 * @LastEditTime: 2021-04-22 12:25:00
 * @LastEditors: Li Jian
 */
// import Scanner from './Scanner'
import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'

window.templateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplateToTokens(templateStr)
    const domStr = renderTemplate(tokens, data)
    return domStr
  }
}
