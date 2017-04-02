var test = require('tape');
var my_word = require('../src/index');

test('one-word:', function(t) {
  let str = 'one two three four five';
  let my = my_word(str);
  str.split(' ').forEach((w) => {
    t.ok(my.has(w), 'has \'' + w + '\'');
  });
  t.end();
});

test('two-word:', function(t) {
  let str = 'one two three four five';
  let my = my_word(str);
  let words = str.split(' ');
  words.forEach((w, i) => {
    if (words[i + 1]) {
      let two = words[i] + ' ' + words[i + 1];
      t.ok(my.has(two), 'has \'' + two + '\'');
    }
  });
  t.end();
});

test('no-sentence-extend:', function(t) {
  let str = 'one two three. two four eight.';
  let my = my_word(str);
  t.equal(my.has('one two'), true, 'in-sentence-match1');
  t.equal(my.has('one two three'), true, 'in-sentence-match2');
  t.equal(my.has('two three'), true, 'in-sentence-match3');
  t.equal(my.has('two four'), true, 'in-sentence-match4');

  t.equal(my.has('three two'), false, 'over-sentence-sequence');
  t.equal(my.has('one two four'), false, 'intra-sentence-sequence');
  t.equal(my.has('two three eight'), false, 'intra-sentence-sequence2');
  t.end();
});
