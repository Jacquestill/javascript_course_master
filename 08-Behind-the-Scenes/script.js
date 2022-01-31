'use strict';

// Scoping in practice

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       console.log(add(2, 3));
//     }
//     // console.log(str);
//     console.log(millenial);
//     // add(2, 3);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// console.log(age);
// printAge();

//---------------------------------------------------------------------

// Hoisting and TDZ in practice

// Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

// // Functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShopping();

// var numProducts = 10;

// function deleteShopping() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//---------------------------------------------------------------------

// this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   //   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   //   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

//---------------------------------------------------------------------

// Regular functions vs. Arrow functions

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   //   console.log(this);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

//---------------------------------------------------------------------

// Primitives Vs. Objects (Primitive Vs. Reference Types)

// Primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// // Object
// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

//---------------------------------------------------------------------

// Primitives Vs. Objects in Pratice

// Primitive Types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';

// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);
