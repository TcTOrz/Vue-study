/*
 * @Author: Li Jian
 * @Date: 2021-04-22 09:30:05
 * @LastEditTime: 2021-04-22 10:34:08
 * @LastEditors: Li Jian
 * 折叠tokens，#/之间的tokens折叠
 */
export default function nextTokens(tokens) {
  // debugger
  const nestedTokens = [];
  const sections = [];
  let collector = nestedTokens;

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    switch (token[0]) {
      case "#":
        collector.push(token);
        sections.push(token);
        collector = token[2] = [];
        break;
      case "/":
        sections.pop();
        collector = sections.length > 0 ?
          sections[sections.length - 1][2] :nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }
  return nestedTokens;
}
