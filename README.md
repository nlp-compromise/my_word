#efficiently find lookup words in a text

the [Aho-Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_string_matching_algorithm) is a trie-based method to look-up a list of words efficiently in text. If you have a bag of words, and want to know if they're found in a sentence, you could loop through and do ```str.match(/\bword\b/)``` but that's a regex for each one, and is slower for every word (O(n)).

Cooler would be to generate a *trie* from the characters in your words, that way a word that starts with a 'zz' will never demand a comparison unless your text happens to have a 'zz' in it.

This algorithm makes a trie of words, instead of characters, and makes certain assumptions about language, and that you are looking for full words in natural language text.

It is forked from [tombooth's async, substring implimentation](https://github.com/tombooth/aho-corasick.js)

#Installation
```
$ npm install my_word
```

#Usage
```javascript
var my_word=require('my_word')
var my= new my_word()
my.add("cameron diaz")
my.add("cameron")
my.add("david cameron")
console.log(my.search("we saw david cameron in the park"))
// ['david cameron']
````


MIT
