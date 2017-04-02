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

this is for *complete goofballs*:

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

in comparison to other prefix/suffix tries (like [efrt](https://github.com/nlp-compromise/efrt)!) **my_word** indexes by word, and sentence, instead of by character.
This means matches will not extend over sentence-boundaries, and that it won't get tripped-up by punctuation or whitespace.

## How-the?
the [Aho-Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_string_matching_algorithm) is a trie-based method to look-up a list of words efficiently in text. If you have a bag of words, and want to know if they're found in a sentence, you could loop through and do ```str.match(/\bword\b/)``` but that's a regex for each one, and is slower for every word (O(n)).

Cooler would be to generate a *trie* from the words in your text.

This algorithm makes a trie of words, instead of characters, and makes certain assumptions about language, and that you are looking for full words in natural language text.

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
  var trie=window.my_word('so this is a story all about how..');
  trie.has('a story');
  //true
</script>
```

MIT
