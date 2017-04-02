'use strict';
const Node = require('./node');
const AhoC = require('./aho');

//terms to add to our trie
const addSequence = function(arr, root) {
  let node = root;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    //look for an existing node
    let nextNode = node.next[word];
    if (nextNode === undefined) {
      nextNode = new Node(word); //make a new node
    }
    node.next[word] = nextNode;
    // nextNode = node;
    node = nextNode;
  }
};

//
const buildUp = (str) => {
  let words = str.split(' ');
  let root = new Node('');

  for (let i = 0; i < words.length; i++) {
    let max = 3;
    if (words.length < max + i) {
      max = words.length - i;
    }
    for (let len = 1; len <= max; len++) {
      addSequence(words.slice(i, i + len), root);
    }
  }

  let aho = new AhoC(root);
  return aho;
};
module.exports = buildUp;
