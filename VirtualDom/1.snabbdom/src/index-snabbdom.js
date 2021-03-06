import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

const patch = init([classModule, propsModule, styleModule, eventListenersModule])

const myVnode1 = h('a', {props: {
  href: 'http://www.baidu.com',
  target: '_blank'
}}, 'test-a');

const myVnode2 = h('ul', {}, [
  h('li', {}, [
    h('a', {props: {
      href: 'http://www.baidu.com',
      target: '_blank'
    }}, 'aaaaa')
  ]),
  h('li', {}, '咖啡'),
  h('li', {}, '茶'),
])

const container = document.getElementById('container')
patch(container, myVnode2)

// var patch = init([ // Init patch function with chosen modules
//   classModule, // makes it easy to toggle classes
//   propsModule, // for setting properties on DOM elements
//   styleModule, // handles styling on elements with support for animations
//   eventListenersModule, // attaches event listeners
// ])

// var container = document.getElementById('container')

// var vnode = h('div#container.two.classes', { on: { click: function() {} } }, [
//   h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
//   ' and this is just normal text',
//   h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
// ])
// // Patch into empty DOM element – this modifies the DOM as a side effect
// patch(container, vnode)

// var newVnode = h('div#container.two.classes', { on: { click: function() {} } }, [
//   h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
//   ' and this is still just normal text',
//   h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
// ])
// // Second `patch` invocation
// patch(vnode, newVnode) // Snabbdom efficiently updates the old view to the new state