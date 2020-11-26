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

const merge= Object.assign(johnDoe,janeDoe);

const result=`: ${merge.johnDoe}`;

console.log(merge);

console.log('2. feladat:');


