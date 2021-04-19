/*
 * @Author: Li Jian
 * @Date: 2021-04-19 09:55:58
 * @LastEditTime: 2021-04-19 12:09:25
 * @LastEditors: Li Jian
 */
import parseAttrsString from './parseAttrsString';
// 简化AST
export default function (templateString) {
  let index = 0;
  let rest = "";
  const startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;
  const endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
  const wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;
  // 两个栈，Vue只用了一个
  const stack1 = [];
  const stack2 = [{ children: [] }];
  while (index < templateString.length - 1) {
    rest = templateString.substring(index);
    if (startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1];
      let attrsString = rest.match(startRegExp)[2];
      // console.log(attrsString);
      stack1.push(tag);
      stack2.push({ tag, children: [], attrs: parseAttrsString(attrsString) });
      const attrsStringLength = attrsString ? attrsString.length : 0;
      index += tag.length + 2 + attrsStringLength;
    } else if (endRegExp.test(rest)) {
      let tag = rest.match(endRegExp)[1];
      let pop_tag = stack1.pop();
      if (tag !== pop_tag) throw new Error("标签未封闭");
      let pop_arr = stack2.pop();
      // if (stack2.length > 0) {
      stack2[stack2.length - 1].children.push(pop_arr);
      // }
      index += tag.length + 3;
    } else if (wordRegExp.test(rest)) {
      let word = rest.match(wordRegExp)[1];
      if (!/^\s+$/.test(word)) {
        stack2[stack2.length - 1].children.push({ text: word, type: 3 });
      }
      index += word.length;
    } else {
      index++;
    }
  }
  return stack2[0].children[0];
}
