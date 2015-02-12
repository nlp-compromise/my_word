#efficiently find lookup words in a text

the [Aho-Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_string_matching_algorithm) is a trie-based method to look-up a list of words efficiently in text. This algorithm makes certain assumptions about language, and that you are looking for full words in natural language.

#Installation
```
$ npm install my_word
```

#Usage
```javascript
var my_word = require('my_word');
var trie = new my_word.trie();

['paris', 'paris hilton', 'germany', 'ny'].forEach(function(word) { trie.add(word, {id:"id"} ); });

var results= my_word.search("i went to germany with paris hilton", trie, {full_word:true})
//[['germany'.{id:"id"}], ['paris hilton', {id:"id"}] ]
````

#Misc
Forked from [tombooth's async, substring implimentation](https://github.com/tombooth/aho-corasick.js)

MIT




