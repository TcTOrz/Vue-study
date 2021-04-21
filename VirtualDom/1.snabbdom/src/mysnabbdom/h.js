/*
 * @Author: Li Jian
 * @Date: 2021-04-19 15:20:50
 * @LastEditTime: 2021-04-19 15:48:46
 * @LastEditors: Li Jian
 */
import vnode from './vnode';

// 低配版，必须接受三个参数，去掉源码中的重载功能
// 三种情况
// h('div', {}, '文字')
// h('div', {}, [])
// h('div', {}, h())
export default function(sel, data, c) {
  if (arguments.length !== 3) throw new Error('此版本必须要传入三个参数')
  if (typeof c === 'string' || typeof c === 'number') {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (!typeof c[i] === 'object' && c.hasOwnProperty('sel'))
        throw new Error('数组中有选项不是h函数')
      // 不需要执行c[i]，因为已经传入h了
      // 只需要收集就可以了
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    let children = [c];
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('第三个参数类型不对')
  }
}