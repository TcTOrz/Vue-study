import createElement from "./createElement";
import updateChildren from './updateChildren';
/*
 * @Author: Li Jian
 * @Date: 2021-04-20 11:27:11
 * @LastEditTime: 2021-04-20 15:43:51
 * @LastEditors: Li Jian
 */
export default function patchVnode(oldVnode, newVnode) {
  // 判断新旧vnode是否是同一个对象
  if (oldVnode === newVnode) return;
  // 判断newVnode有没有text属性
  if (
    newVnode.text &&
    (!newVnode.children || newVnode.children.length === 0)
  ) {
    // console.log("新vnode有text属性");
    if (newVnode.text !== oldVnode.text) {
      // 如果新旧节点中的text不同，则将新的text写入旧的，如果旧的是children，也会被直接覆盖
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    // console.log("新vnode没有text属性");
    // 判断旧的有没有children
    if (oldVnode.children && oldVnode.children.length > 0) {
      // 新老都有children
      // 所有未处理节点
      // let un = 0
      // for (let i = 0; i < newVnode.children.length; i++) {
      //   let ch = newVnode.children[i];
      //   let isExist = false
      //   for (let j=0; j < oldVnode.children.length; j++) {
      //     if (oldVnode.children[j].sel === ch.sel && oldVnode.children[j].key === ch.key) {
      //       isExist = true
      //     }
      //   }
      //   if (!isExist) {
      //     // console.log(newVnode.children[i]);
      //     let dom = createElement(ch)
      //     // console.log(dom);
      //     ch.elm = dom
      //     if (un < oldVnode.children.length) {
      //       oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm)
      //     } else {
      //       oldVnode.elm.appendChild(dom)
      //     }
      //   } else {
      //     un++;
      //     // if (i !== j) {

      //     // }
      //   }
      // }
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    } else {
      // 老的没有children，新的有children
      // 清空
      oldVnode.elm.innerHTML = '';
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children[i])
        oldVnode.elm.appendChild(dom);
      }
    }
  }
}