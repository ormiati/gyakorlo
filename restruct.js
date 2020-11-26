'use strict'

console.log('Átstrukturálási feladatok')

console.log('1. feladat:');

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const {firstName, lastName, job = 'Unknown'} = user;

console.log(firstName, lastName, job);

console.log('2. feladat:');

const {lastName:l, firstName:f, job: j ='Unknown'} = user;
console.log(l, f, j);

console.log('3. feladat:');

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

const [a, , b, , k] = names;

console.log(a, b, k);