'use strict';
const sentenceSplit = require('./sentence');

//turn a text into an array of word-arrays
const tokenize = (text) => {
  text = text.toLowerCase();
  let arr = sentenceSplit(text);
  return arr.map((sentence) => {
    let words = sentence.split(/[ -]+/); // FIXME:hyphenation
    for(let i = 0; i < words.length; i++) {
      //leading punctuation
      words[i] = words[i].replace(/^['"\( ]+/, '');
      //trailing punctuation
      words[i] = words[i].replace(/['",\.!:;\?\) ]+$/, '');
    }
    return words;
  });
};
module.exports = tokenize;
