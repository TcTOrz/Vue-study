/*
 * @Author: Li Jian
 * @Date: 2021-04-21 16:14:41
 * @LastEditTime: 2021-04-21 17:05:17
 * @LastEditors: Li Jian
 * 扫描字符串类
 */
export default class Scanner {
  constructor(templateStr) {
    // console.log("Scanner类", templateStr);
    this.templateStr = templateStr
    this.pos = 0
    this.tail = templateStr
  }

  // 扫描{{}}
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // 返回指定内容
  scanUtil(stopTag) {
    const pos_backup = this.pos
    while (this.tail.indexOf(stopTag) != 0 && !this.eos()) {
      this.pos++;
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos)
  }

  eos() {
    return this.pos >= this.templateStr.length
  }
}
