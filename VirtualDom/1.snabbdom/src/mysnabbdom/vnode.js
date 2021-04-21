/*
 * @Author: Li Jian
 * @Date: 2021-04-19 15:21:15
 * @LastEditTime: 2021-04-20 11:32:59
 * @LastEditors: Li Jian
 */
export default function(sel, data, children, text, elm) {
  const key = data === undefined ? undefined : data.key
  return { sel, data, children, text, elm, key }
}