'use strict';

class AhoC {
  constructor(root) {
    this.root = root;
  }
  print() {
    this.root.print();
  }
  has(str) {
    let terms = str.split(' ');
    let node = this.root;
    for (let i = 0; i < terms.length; i++) {
      if (node.next[terms[i]] === undefined) {
        return false;
      } else {
        node = node.next[terms[i]];
      }
    }
    return true;
  }
}
module.exports = AhoC;
