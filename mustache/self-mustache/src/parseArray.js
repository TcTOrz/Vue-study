/*
 * @Author: Li Jian
 * @Date: 2021-04-22 12:00:45
 * @LastEditTime: 2021-04-22 12:22:23
 * @LastEditors: Li Jian
 */
import lookup from "./lookup";
import renderTemplate from "./renderTemplate";
export default function parseArray(token, data) {
  let v = lookup(data, token[1]);
  let resultStr = "";
  for (let i = 0; i < v.length; i++) {
    resultStr += renderTemplate(token[2], {
      ".": v[i],
      ...v[i],
    });
  }
  return resultStr;
}
