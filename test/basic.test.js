var test = require('tape');
var my_word = require('../src/index');

test('one-word:', function(t) {
  let str = 'one two three four five'
  let my = my_word(str)
  str.split(' ').forEach((w) => {
    t.ok(my.has(w), 'has \'' + w + '\'');
  })
  t.end();
});

test('two-word:', function(t) {
  let str = 'one two three four five'
  let my = my_word(str)
  let words = str.split(' ')
  words.forEach((w, i) => {
    if (words[i + 1]) {
      let two = words[i] + ' ' + words[i + 1]
      t.ok(my.has(two), 'has \'' + two + '\'');
    }
  })
  t.end();
});
