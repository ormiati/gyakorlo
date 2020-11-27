'use strict'
console.log('Szövegek')
console.log('1.feladat:');

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
};

const merge= {'0':{...johnDoe},'1':{...janeDoe}};

console.log('0:',merge[0],'1:', merge[1]);

console.log('2. feladat:');

const tag=(texts, ...values)=> 
texts.map((text, index)=>
`${text.italics()} ${values[index] ? `${values[index].bold()}` : ''}` 
).join('');

const sent = tag `My name is ${johnDoe.firstName} ${johnDoe.lastName}, and this is my sister ${janeDoe.firstName} ${janeDoe.lastName}`;
document.body.innerHTML = sent;
