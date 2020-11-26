'use strict'
console.log('Szövegek')
console.log('1.feladat:');

const johnDoe = { 
    firstName: 'Jonh',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
};

const merge= {'0':{...johnDoe},'1':{...janeDoe}};

console.log('0:',merge[0],'1:', merge[1]);

console.log('2. feladat:');


