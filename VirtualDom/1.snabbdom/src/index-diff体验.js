/*
 * @Author: Li Jian
 * @Date: 2021-04-19 14:26:51
 * @LastEditTime: 2021-04-19 16:15:55
 * @LastEditors: Li Jian
 */
import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

const container = document.getElementById('container')
const btn = document.getElementById('btn')

const patch = init([classModule, propsModule, styleModule, eventListenersModule])

// 最小量更新，key很关键，是节点的唯一标识，
// 告诉diff算法，在更改前后他们是同一个DOM节点

// 父节点(选择器相同，key相同则是同一节点)不是同一个节点，则子节点暴力删除插入

// 只进行同层比较

const vnode1 = h('ul', {}, [
  h('li', {key: 'A'}, 'A'),
  h('li', {key: 'B'}, 'B'),
  h('li', {key: 'C'}, 'C'),
])


patch(container, vnode1)

const vnode2 = h('ul', {}, [
  h('li', {key: 'D'}, 'D'),
  h('li', {key: 'A'}, 'A'),
  h('li', {key: 'B'}, 'B'),
  h('li', {key: 'C'}, 'C'),
])

btn.onclick = function() {
  patch(vnode1, vnode2)
}