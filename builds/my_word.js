/* my_word v0.0.2
  
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.my_word = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AhoC = function () {
  function AhoC(root) {
    _classCallCheck(this, AhoC);

    this.root = root;
  }

  _createClass(AhoC, [{
    key: 'print',
    value: function print() {
      this.root.print();
    }
  }, {
    key: 'has',
    value: function has(str) {
      var terms = str.split(' ');
      var node = this.root;
      for (var i = 0; i < terms.length; i++) {
        if (node.next[terms[i]] === undefined) {
          return false;
        } else {
          node = node.next[terms[i]];
        }
      }
      return true;
    }
  }]);

  return AhoC;
}();

module.exports = AhoC;

},{}],2:[function(_dereq_,module,exports){
'use strict';

var Node = _dereq_('./node');
var AhoC = _dereq_('./aho');
var tokenize = _dereq_('./tokenize');

//terms to add to our trie
var addSequence = function addSequence(arr, root) {
  var node = root;
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    //look for an existing node
    var nextNode = node.next[word];
    if (nextNode === undefined) {
      nextNode = new Node(word); //make a new node
    }
    node.next[word] = nextNode;
    // nextNode = node;
    node = nextNode;
  }
};

//
var buildUp = function buildUp(str) {
  var sentences = tokenize(str);
  var root = new Node('');

  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i];
    for (var o = 0; o < words.length; o++) {
      var max = 3;
      if (words.length < max + o) {
        max = words.length - o;
      }
      for (var len = 1; len <= max; len++) {
        addSequence(words.slice(o, o + len), root);
      }
    }
  }

  var aho = new AhoC(root);
  return aho;
};
module.exports = buildUp;

},{"./aho":1,"./node":3,"./tokenize":5}],3:[function(_dereq_,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var printFrom = function printFrom(prefix, node) {
  if (node.end === true) {
    console.log(prefix + ';');
    return;
  } else {
    var words = Object.keys(node.next);
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      prefix += ' ' + w;
      printFrom(prefix, node.next[w]);
    }
  }
  return;
};

var Node = function () {
  function Node(str) {
    _classCallCheck(this, Node);

    this.id = null;
    this.next = {};
    this.end = true;
  }

  _createClass(Node, [{
    key: 'print',
    value: function print() {
      printFrom('', this);
    }
  }]);

  return Node;
}();

module.exports = Node;

},{}],4:[function(_dereq_,module,exports){
'use strict';

module.exports = ['arc', 'al', 'exp', 'fy', 'pd', 'pl', 'plz', 'tce', 'bl', 'ma', 'ba', 'lit', 'ex', 'eg', 'ie', 'ca', 'cca', 'vs', 'etc', 'esp', 'ft', 'bc', 'ad', 'md', 'corp', 'col', 'dept', 'univ', 'assn', 'bros', 'inc', 'ltd', 'co', 'rd', 'st', 'dist', 'mt', 'ave', 'blvd', 'cl', 'ct', 'cres', 'hwy',

//states
'ariz', 'cal', 'calif', 'colo', 'conn', 'fla', 'fl', 'ga', 'ida', 'ia', 'kan', 'kans', 'minn', 'neb', 'nebr', 'okla', 'penna', 'penn', 'pa', 'dak', 'tenn', 'tex', 'ut', 'vt', 'va', 'wis', 'wisc', 'wy', 'wyo', 'usafa', 'alta', 'ont', 'que', 'sask',

//dates
'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec', 'circa',

//Honorifics
'adj', 'adm', 'adv', 'asst', 'atty', 'bldg', 'brig', 'capt', 'cmdr', 'comdr', 'cpl', 'det', 'dr', 'esq', 'gen', 'gov', 'hon', 'jr', 'llb', 'lt', 'maj', 'messrs', 'mister', 'mlle', 'mme', 'mr', 'mrs', 'ms', 'mstr', 'op', 'ord', 'phd', 'prof', 'pvt', 'rep', 'reps', 'res', 'rev', 'sen', 'sens', 'sfc', 'sgt', 'sir', 'sr', 'supt', 'surg'];

},{}],5:[function(_dereq_,module,exports){
'use strict';

var sentenceSplit = _dereq_('./sentence');

//turn a text into an array of word-arrays
var tokenize = function tokenize(text) {
  text = text.toLowerCase();
  var arr = sentenceSplit(text);
  return arr.map(function (sentence) {
    var words = sentence.split(/[ -]+/); // FIXME:hyphenation
    for (var i = 0; i < words.length; i++) {
      //leading punctuation
      words[i] = words[i].replace(/^['"\( ]+/, '');
      //trailing punctuation
      words[i] = words[i].replace(/['",\.!:;\?\) ]+$/, '');
    }
    return words;
  });
};
module.exports = tokenize;

},{"./sentence":6}],6:[function(_dereq_,module,exports){
//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2017 MIT
'use strict';
//data

var abbreviations = _dereq_('./abbrevs');
//regs-
var abbrev_reg = new RegExp('\\b(' + abbreviations.join('|') + ')[.!?] ?$', 'i');
var acronym_reg = new RegExp('[ |\.][A-Z]\.?( *)?$', 'i');
var elipses_reg = new RegExp('\\.\\.+( +)?$');

//start with a regex:
var naiive_split = function naiive_split(text) {
  var all = [];
  //first, split by newline
  var lines = text.split(/(\n+)/);
  for (var i = 0; i < lines.length; i++) {
    //split by period, question-mark, and exclamation-mark
    var arr = lines[i].split(/(\S.+?[.!?])(?=\s+|$)/g);
    for (var o = 0; o < arr.length; o++) {
      all.push(arr[o]);
    }
  }
  return all;
};

var sentence_parser = function sentence_parser(text) {
  var sentences = [];
  text = text || '';
  //first do a greedy-split..
  var chunks = [];
  //ensure it 'smells like' a sentence
  if (!text || typeof text !== 'string' || /\S/.test(text) === false) {
    return sentences;
  }
  //start-stupid
  var splits = naiive_split(text);
  //filter-out the crap ones
  for (var i = 0; i < splits.length; i++) {
    var s = splits[i];
    if (s === undefined || s === '') {
      continue;
    }
    //this is meaningful whitespace
    if (/\S/.test(s) === false) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
    }
    //else, only whitespace, no terms, no sentence
    chunks.push(s);
  }

  //detection of non-sentence chunks:
  //loop through these chunks, and join the non-sentence chunks back together..
  for (var _i = 0; _i < chunks.length; _i++) {
    var c = chunks[_i];
    //should this chunk be combined with the next one?
    if (chunks[_i + 1] !== undefined && (abbrev_reg.test(c) || acronym_reg.test(c) || elipses_reg.test(c))) {
      chunks[_i + 1] = c + (chunks[_i + 1] || '');
    } else if (c && c.length > 0) {
      //this chunk is a proper sentence..
      sentences.push(c);
      chunks[_i] = '';
    }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text];
  }
  return sentences;
};

module.exports = sentence_parser;
// console.log(sentence_parser('john f. kennedy was nice. He plays golf'));

},{"./abbrevs":4}]},{},[2])(2)
});