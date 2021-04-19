/*
 * @Author: Li Jian
 * @Date: 2021-04-19 12:07:38
 * @LastEditTime: 2021-04-19 12:29:57
 * @LastEditors: Li Jian
 */
export default function(attrsString) {
  if (!attrsString) return [];
  let isYinhao = false;
  let point = 0;
  let ret = [];
  for (let i = 0; i < attrsString.length; i++) {
    let char = attrsString[i];
    if (char == '"'){
      isYinhao = !isYinhao
    } else if (char === ' ' && !isYinhao) {
      if (!/^\s*$/.test(attrsString.substring(point, i))) {
        ret.push(attrsString.substring(point, i).trim());
        point = i;
      }
    }
  }
  ret.push(attrsString.substring(point).trim())
  ret = ret.map(item => {
    const o = item.match(/^(.+)="(.+)"$/);
    return {
      name: o[1],
      value: o[2]
    };
  });
  return ret;
}