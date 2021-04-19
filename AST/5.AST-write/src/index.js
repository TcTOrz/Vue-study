/*
 * @Author: Li Jian
 * @Date: 2021-04-19 09:40:27
 * @LastEditTime: 2021-04-19 12:28:49
 * @LastEditors: Li Jian
 */
import parse from './parse';

const templateString = `<div>
    <h3 class="test" id="name" data-n="2">hello</h3>
    <ul>
      <li>香蕉</li>
      <li>牛奶</li>
      <li>核桃</li>
    </ul>
  </div>`;

const ast = parse(templateString);
console.log(ast);