const myWord = require('./src/index');

// let text = 'so this is a story all about how'
let text = 'one two three four five. two four seven';
let t = myWord(text);

console.log(t.has('three four'));
// t.print()
// console.log(t.root.next.three);
