'use strict';
const tokenize = require('./tokenize');
const Node = require('./node');
const AhoC = require('./aho');

//terms to add to our trie
const addSequence = function(arr, node, root) {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    //look for an existing node
    let nextNode = root.next[word];
    if (nextNode === undefined) {
      //make a new node
      console.log('-new-', word);
      nextNode = new Node(word);
    }
    node.next[word] = nextNode;
    nextNode = node;
  }
};

//
const buildUp = (str) => {
  let root = new Node('');
  let sentences = tokenize(str);

  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i];
    let max = 3;
    if (words.length < max + i) {
      max = words.length - i;
    }
    for (let len = 1; len <= max; len++) {
      addSequence(words.slice(i, i + len), root, root);
    }
  }

  let aho = new AhoC(root);
  return aho;
};
module.exports = buildUp;
