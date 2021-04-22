/*
 * @Author: Li Jian
 * @Date: 2021-04-22 10:37:13
 * @LastEditTime: 2021-04-22 14:29:35
 * @LastEditors: Li Jian
 */
import lookup from "./lookup";
import parseArray from "./parseArray";
export default function renderTemplate(tokens, data) {
  let resultStr = "";
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token[0] === "text") {
      resultStr += token[1];
    } else if (token[0] === "name") {
      resultStr += lookup(data, token[1]);
      console.log(token);
    } else if (token[0] === "#") {
      // 递归
      resultStr += parseArray(token, data);
    }
  }
  console.log(resultStr);
  return resultStr;
}
