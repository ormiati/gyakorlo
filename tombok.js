'use strict'

console.log('Tömbök 1. feladat:');

const oldArray=[22, 44, 66, 10, 15];


const sumArray = oldArray
    .map(item=> item * 1.27)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(sumArray);


console.log('Tömbök 2. feladat:');

const one=[2, 22, 'szia', true, 55];
const two=true;
const checkObject ={
        exists:'',
        index:'',
        allElementIsANumber:'',
        someElementIsANumber:''
    };

// const ans = (checkObject.exists, checkObject.index, checkObject.allElementIsANumber, checkObject.someElementIsANumber) => return {
//    checkObject.exists.find(one => one[item] === two) +
//    checkObject.index.findIndex(one => one[item]=== two, '-1') +
//    checkObject.allElementIsANumber.every(one, two => isInteger) +
//    checkObject.someElementIsANumber.some(one, two => isInteger)
// };

// console.log(ans);

console.log('Tömbök 3. feladat:');

console.log ('<ul>');
oldArray.forEach(item =>console.log('<li>', item, '</li>'));
console.log('</ul>');