'use strict';
const Node = require('./node');
const AhoC = require('./aho');
const tokenize = require('./tokenize');

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
  let sentences = tokenize(str);
  let root = new Node('');

  for(let i = 0; i < sentences.length; i++) {
    let words = sentences[i];
    for (let o = 0; o < words.length; o++) {
      let max = 3;
      if (words.length < max + o) {
        max = words.length - o;
      }
      for (let len = 1; len <= max; len++) {
        addSequence(words.slice(o, o + len), root);
      }
    }
  }

  let aho = new AhoC(root);
  return aho;
};
module.exports = buildUp;
