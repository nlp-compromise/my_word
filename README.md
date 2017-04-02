<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  <div>a small text-indexing library</div>
  <a href="https://npmjs.org/package/my_word">
    <img src="https://img.shields.io/npm/v/my_word.svg?style=flat-square" />
  </a>
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" />
  </a>
</div>

<div align="center">
  <code>npm i my_word</code>
</div>

this is for **complete goofballs**:

```js
myCompleteMemoirs.indexOf('johnny carson') === -1
```
because it loops through every character in the text.

even worse!
* it will match `fjohnny carsonb`
* it will miss `johnny-carson`
* it will over-scan on `jjohnny cartoon`
etc.

## All your word are belong:
```js
let index = my_word(myCompleteMemoirs)
//takes a few milliseconds..

// 💥 fast 💥
index.has('johnny carson')
//true
```

by using **my_word**, not only are lookups faster, but filesize + memory-use is much smaller.

in comparison to other prefix/suffix tries (like [efrt](https://github.com/nlp-compromise/efrt)!) **my_word** indexes by *word and sentence*, instead of by character.
This means matches will not extend over sentence-boundaries, and it won't get tripped-up by punctuation, whitespace, or prefix-matches.

## How-the?
the [Aho-Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_string_matching_algorithm) is a fancy ~pants~ way to look-up a string efficiently in text.

If you have a bag of words, and want to know whether they're found in a text, you could loop through and do a ```str.match(/\bword\b/)``` for each one - but that's equally-slow for every lookup (O(n)).

...or you could put all the words in an object, but *lord-help-you* when you want to lookup a multiple-word input.

Faster would be to store the sequences of words in a [stick-and-arrow diagram](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm#/media/File:Ahocorasick.svg) kinda-way.

This way, any-length of text can be searched-for immediately O(1), and no word is stored twice.

This algorithm makes a graph of words, instead of characters, and makes certain assumptions about language, and that you are looking for full words in natural language text.

It is forked/lifted from [tombooth's async, substring implimentation](https://github.com/tombooth/aho-corasick.js)

## Usage
```
$ npm install my_word
```

```javascript
var myWord=require('my_word')
var index= myWord("we saw david cameron and cameron diaz in the park")

console.log(index.has('david cameron'))
// true
console.log(index.has('cameron diaz'))
// true
console.log(index.has('we saw david diaz'))
// false
console.log(index.has('cameron'))
// true
````

```html
<script src="https://unpkg.com/my_word@latest/builds/my_word.min.js"></script>
<script>
  var trie = window.my_word('I am the very model of a modern Major-General');
  trie.has('a modern major');
  //true
</script>
```

MIT
