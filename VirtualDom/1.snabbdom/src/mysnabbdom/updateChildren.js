/*
 * @Author: Li Jian
 * @Date: 2021-04-20 15:39:36
 * @LastEditTime: 2021-04-21 11:01:07
 * @LastEditors: Li Jian
 */
import createElement from "./createElement";
import patchVnode from "./patchVnode";
// import createElement from "./createElement";

function checkSameVnode(a, b) {
  return a.key === b.key && a.sel === b.sel;
}

export default function updateChildren(paranetElm, oldCh, newCh) {
  console.log("updateChildren", oldCh, newCh);

  // 旧前
  let oldStartIdx = 0;
  // 新前
  let newStartIdx = 0;
  // 旧后
  let oldEndIdx = oldCh.length - 1;
  // 旧前
  let newEndIdx = newCh.length - 1;

  // 旧前节点
  let oldStartVnode = oldCh[0];
  // 旧后节点
  let oldEndVnode = oldCh[oldEndIdx];
  // 新前节点
  let newStartVnode = newCh[0];
  // 新后节点
  let newEndVnode = newCh[newEndIdx];

  let keyMap = null;

  console.log(oldStartIdx, newEndIdx);

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[++oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (checkSameVnode(oldStartVnode, newStartVnode)) {
      // 新前和旧前

      console.log("新前和旧前命中");
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (checkSameVnode(oldEndVnode, newEndVnode)) {
      // 新后和旧后
      console.log("新后和旧后命中");
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (checkSameVnode(newEndVnode, oldStartVnode)) {
      // 新后和旧前
      console.log("新后和旧前命中");
      patchVnode(oldStartVnode, newEndVnode);
      // 插入旧前底部
      paranetElm.insertBrfore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (checkSameVnode(oldEndVnode, newStartVnode)) {
      // 新前与旧后
      console.log("新前与旧后命中");
      patchVnode(oldEndVnode, newStartVnode);
      paranetElm.insertBrfore(oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      // 都没有找到的情况
      console.log("都没有命中");
      if (!keyMap) {
        keyMap = {};
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          const key = oldCh[i].key;
          if (key !== undefined) {
            keyMap[key] = i;
          }
        }
      }
      // 寻找newStartIdx在keyMap中的位置
      const idxInOld = keyMap[newStartVnode.key];
      if (idxInOld === undefined) {
        // 全新的项，插入
        paranetElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm)
      } else {
        // 不是全新，移动
        const elmToMove = oldCh[idxInOld];
        patchVnode(elmToMove, newStartVnode);
        // 把当前项处理为undefined，标记为处理完
        oldCh[idxInOld] = undefined;
        // 移动
        paranetElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
      }
      newStartVnode = newCh[++newStartIdx];
    }
  }

  // 继续看有无剩余
  // 循环结束，old还是小
  if (newStartIdx <= newEndIdx) {
    console.log("new还有剩余没有处理，插入");
    // 插入标杆
    const before = newCh[newEndIdx + 1] ? newCh[newEndIdx + 1].elm : null;
    console.log("标杆", before);
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      paranetElm.insertBefore(createElement(newCh[i]), oldCh[oldEndIdx].elm);
    }
  } else if (oldStartIdx <= oldEndIdx) {
    console.log("old还有剩余没有处理，删除");
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      if (oldCh[i]) paranetElm.removeChild(oldCh[i].elm);
    }
  }
}
