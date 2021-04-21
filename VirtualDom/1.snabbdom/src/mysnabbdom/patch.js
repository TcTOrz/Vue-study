/*
 * @Author: Li Jian
 * @Date: 2021-04-19 16:43:44
 * @LastEditTime: 2021-04-20 15:44:56
 * @LastEditors: Li Jian
 */
import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from './patchVnode';
export default function (oldVnode, newVnode) {
  console.log(oldVnode, newVnode);
  // 传入第一个参数是Dom还不是虚拟节点
  if (oldVnode.sel === "" || oldVnode.sel === undefined) {
    // DOM节点，此时包装虚拟节点
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }

  // 判断oldVnode和newVnode是不是同一个vnode
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    console.log("是同一个节点");
    patchVnode(oldVnode, newVnode);
  } else {
    console.log("不是同一个节点");
    let newVnodeElm = createElement(newVnode);
    if (newVnodeElm)
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);

    // 删除旧节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
