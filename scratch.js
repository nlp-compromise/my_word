const myWord = require('./src/index');

// let text = 'so this is a story all about how'
let text = 'one two three four five. two four seven';
let t = myWord(text);
// console.log(t.root.next.four)
console.log(t.has('three'));
console.log(t.has('three four'));
// console.log(t.has('five'))
// console.log(t.has('three nope'))
// let two = t.root.next.two
// console.log(t.root.next.one.next.two)
// console.log(two)
// console.log(t.root.next.one)
// t.print()
// console.log(t)
