'use strict';
const sentenceSplit = require('./sentence');

const remove = {
  '.': true,
  ',': true,
  ';': true,
  ':': true,
  '"': true,
  '\'': true,
  '(': true,
  ')': true,
  '{': true,
  '}': true,
  ' ': true,
};
//
const tokenize = (text) => {
  text = text.toLowerCase();
  let arr = sentenceSplit(text);
  return arr.map((str) => {
    //leading punctuation
    str = str.replace(/^['"\( ]+/, '');
    //trailing punctuation
    str = str.replace(/['",\.!:;\?\) ]+$/, '');
    //hyphenation
    str = str.replace(/([a-z])-([a-z])/g, '$1 $2');
    return str;
  });
};
module.exports = tokenize;
