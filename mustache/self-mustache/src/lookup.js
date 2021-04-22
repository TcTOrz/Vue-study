/*
 * @Author: Li Jian
 * @Date: 2021-04-22 11:00:38
 * @LastEditTime: 2021-04-22 12:17:45
 * @LastEditors: Li Jian
 */
// dataObj: {
//   a: {
//     b: {
//       c: 100
//     }
//   }
// }
// keyName: 'a.b.c'
export default function lookup(dataObj, keyName) {
  // let temp = dataObj
  if (keyName.split('.') != -1 && keyName != '.') {
    let keys = keyName.split('.');
    let temp = dataObj;
    for(let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  }
  return dataObj[keyName];
}