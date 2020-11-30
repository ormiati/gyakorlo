'use script'

console.log('1. feladat:');

const date = new Date();
const yeon = new Date('2020-01-01');
const sec = ((date.getTime()- yeon.getTime())/1000);
console.log(sec);

console.log('2. feladat:');

const days = ((date.getTime()- yeon.getTime())/1000/60/60/24/7);
console.log(days*7-days*2);

console.log('3. feladat:');


console.log(date.toLocaleDateString ('hu'));
console.log(date.toLocaleTimeString ('hu'))

