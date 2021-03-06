'use strict';

// --- Default Parameters ---

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

//---------------------------------------------------------------------

// --- How Passing Arguments Works: Value vs. Reference ---

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 21421612684,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 21421612684) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//---------------------------------------------------------------------

// --- Functions Accepting Callback Functions ---

// Callback function (Lower-order)
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// // Callback function (Lower-order)
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// // Higher-Order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('????');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

//---------------------------------------------------------------------

// --- Functions Returning Functions ---

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHello = greet('Hello');
// greeterHello('Jonas');
// greeterHello('Steven');

// greet('Hey')('Jacques');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hey')('Chereline');

//---------------------------------------------------------------------

// --- The Call and Apply Methods ---

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function () {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// // lufthansa.book(239, 'Jonas Schmedtmann');
// // lufthansa.book(635, 'John Smith');
// // console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // // // Does NOT work
// // // // book(23, 'Sarah Williams');

// // // // ---Call Method---
// // book.call(eurowings, 23, 'Sarah Williams');
// // console.log(eurowings);

// // book.call(lufthansa, 239, 'Mary Cooper');
// // console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // // ---Apply Method---

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// // // Same as apply, ...
// book.call(swiss, ...flightData);
// console.log(swiss);

//---------------------------------------------------------------------

// --- The Bind Method ---

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');
// bookLX(19, 'Jacques Till');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// console.log(lufthansa);
// console.log(eurowings);
// console.log(swiss);

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value*0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// // --- Exercise ---

// const addRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// // --- OR Arrow function ---

// // const addRate = rate => value => console.log(value + value * rate);

// const addVAT2 = addRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//---------------------------------------------------------------------

// --- Immediately Invoked Function Expressions (IIFE) ---

// const runOnce = function () {
//   console.log('This will never run again!');
// };
// runOnce();

// (function () {
//   console.log('This will never run again!');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again!'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 23;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

//---------------------------------------------------------------------

// --- Closures ---

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

//---------------------------------------------------------------------

// --- More Closure Examples

// Example 1

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

//---------------------------------------------------------------------
