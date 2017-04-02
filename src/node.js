'use strict';

const printFrom = function(prefix, node) {
  if (node.end === true) {
    console.log(prefix + ';')
    return
  } else {
    let words = Object.keys(node.next)
    for (let i = 0; i < words.length; i++) {
      let w = words[i]
      prefix += ' ' + w
      printFrom(prefix, node.next[w])
    }
  }
  return
}

class Node {
  constructor(str) {
    this.id = null
    this.next = {}
    this.end = true
  }
  print() {
    printFrom('', this)
  }
}
module.exports = Node
