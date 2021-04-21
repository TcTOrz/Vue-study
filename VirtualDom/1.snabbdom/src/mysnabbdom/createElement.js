/*
 * @Author: Li Jian
 * @Date: 2021-04-19 16:59:23
 * @LastEditTime: 2021-04-20 10:29:43
 * @LastEditors: Li Jian
 */
// 真正创建节点。将vnode创建为DOM，是孤儿节点，不进行插入
export default function createElement(vnode) {
  // console.log("将虚拟节点", vnode, "变为真的dom");
  let domNode = document.createElement(vnode.sel);
  // 有子节点还是文本
  if (
    vnode.text !== "" &&
    (vnode.children === undefined || vnode.children.length === 0)
  ) {
    domNode.innerText = vnode.text;
    // 补充elm属性
    // vnode.elm = domNode;
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 内部是子节点，递归
    for (let i = 0; i < vnode.children.length; i++) {
      let ch = vnode.children[i];
      let chdom = createElement(ch);
      // console.log(ch);
      domNode.appendChild(chdom);
    }
  }
  vnode.elm = domNode;
  // console.log('ttt', vnode);
  return vnode.elm;
}
