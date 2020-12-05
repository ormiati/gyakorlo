// define variables

var name = 'Satya';
const name2 = ' Piri';
let name3 = 'Béci';

// redefine variable.

name = 'Józsi';
name2 = 'Peti'; //ez nem fogja felülcsapni
name3 = 'Pali';

// variable (változók) types.
//Primitives (Primitívek)
//String
const userName ='John Doe';
//number
const userAge = 33;
//boolean
const userIsAdmin = true;
//null
const iDontKnow = null;
// undrgined
let itIsUnmfegined;
//BigInt
const bigNumber = 333n;
const bigNumber2 = BigInt(6546469498498798498774987984);
//symbol
const sym1 = Symbol();
const user ={};
user [sym1] = 'Joe'

//Collections: (kollekciók)
//array (tömbök)
const array1 = [1, 2, 3];
console.log(array1[2]);
array1[0] = 5; //felülírtam az első elem értékét
array1.push(4); //hozzáadunk még egy elemet a tömbhöz
array1.unshift(0); //így teszek az elejére elemet
array1.pop(); // az utolsó elemet törlöm
array1.shift(); //az első elemet törlöm

//object (objektum)

console.log(typeof array1);
const age = 44;
// console.log (age.__proto__.__proto__);
const user = {
    name: 'Kiss Márk', 
    age: 44, 
    address: 'Bp XXI. Kiss tér 22.',
    email: 'kiss.mark@gmail.com',
    salary: 4000,
    };
console.log(user.address); // így tudom az egyik elemet kiíratni a useren belülről
user.salary = 5000;
user.department = 'accounting';
console.log(user.department.length); // a department értékének a hosszát adja meg

user.hello = function() {
    return `Hello, a nevem ${this.name}`;
};

console.log(user.hello());

user.address = user.address.replace('Bp. XXI', 'Kecskemét');
console.log(user);





