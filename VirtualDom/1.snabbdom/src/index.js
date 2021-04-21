/*
 * @Author: Li Jian
 * @Date: 2021-04-19 14:26:51
 * @LastEditTime: 2021-04-21 10:47:22
 * @LastEditors: Li Jian
 */
import h from './mysnabbdom/h';
import patch from './mysnabbdom/patch';

// const myVnode1 = h('ul', {}, [
//   h('li', {}, 'test1'),
  
// ]);

// console.log(test);

// const myVnode1 = h('h1', {}, 'hello')
// const myVnode1 = h('ul', {}, [
//   h('li', {}, 'A'),
//   // h('li', {}, 'A'),
//   h('li', {}, [
//     h('div', {}, 'hello'),
//     h('div', {}, 'world')
//   ]),
//   h('li', {}, 'C'),
// ])

const container = document.getElementById('container')
const btn = document.getElementById('btn')

// patch(container, myVnode1)

// const myVnode2 = h('section', {}, [
//   h('h1', {}, 'hello'),
//   h('h1', {}, 'world'),
// ])

// btn.onclick = function() {
//   patch(myVnode1, myVnode2);
// }

// const myVnode1 = h('section', {}, [
//   h('p', {}, 'A'),
//   h('p', {}, 'B'),
//   h('p', {}, 'C'),
// ])

// patch(container, myVnode1)

// const myVnode2 = h('section', {}, 'hello')

// btn.onclick = function() {
//   patch(myVnode1, myVnode2);
// }

// const myVnode1 = h('section', {}, 'hello')

// patch(container, myVnode1)

// const myVnode2 = h('section', {}, [
//   h('p', {}, 'A'),
//   h('p', {}, 'B'),
//   h('p', {}, 'C'),
//   h('p', {}, 'D'),
// ])

// btn.onclick = function() {
//   patch(myVnode1, myVnode2);
// }

const myVnode1 = h('section', {}, [
  h('p', {key: 'A'}, 'A'),
  h('p', {key: 'B'}, 'B'),
  h('p', {key: 'C'}, 'C'),
])

patch(container, myVnode1)

const myVnode2 = h('section', {}, [
  h('p', {key: 'A'}, 'A'),
  h('p', {key: 'B'}, 'B'),
  // h('p', {key: 'M'}, 'M'),
  h('p', {key: 'N'}, 'N'),
  h('p', {key: 'C'}, 'C'),
  h('p', {key: 'D'}, 'D'),
])

btn.onclick = function() {
  patch(myVnode1, myVnode2);
}