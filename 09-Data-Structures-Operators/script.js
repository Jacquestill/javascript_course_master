'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//--------------------------------------------------------------------

// Destructuring Arrays

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring
// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Switching Variables with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Defualt values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//--------------------------------------------------------------------

// Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
// time: '22:30',
// address: 'Via del Sole, 21',
// mainIndex: 2,
// starterIndex: 2,
// });

// restaurant.orderDelivery({
// address: 'Via del Sole, 21',
// starterIndex: 1,
// });

//--------------------------------------------------------------------

// Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 array or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schemdtmann`);

// // Real-world example
// const ingredients = [
//   // prompt(`Let's make pasta! Ingredient 1?`),
//   // prompt(`Let's make pasta! Ingredient 2?`),
//   // prompt(`Let's make pasta! Ingredient 3?`),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//--------------------------------------------------------------------

// Rest Pattern and Parameters

// 1. Destructuring

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // Example Arrays
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Example Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// // 2. Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

//--------------------------------------------------------------------

// Short Circuiting (&& and ||)

// // OR Operator
// console.log('--- OR ---');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); //3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // Example
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // AND Operator
// console.log('--- AND ---');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');

//--------------------------------------------------------------------

// The Nullish Coalescing Operator (??)

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//--------------------------------------------------------------------

// Looping Arrays: The FOR-OF loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

// console.log([...menu.entries()]);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//--------------------------------------------------------------------

// Enhanced Object Literals

// Changes made inside restaurant object, look at comments.
// We don't need to write function after giving the object literal it's name.
// We can add objects inside other object by only writing the name of the other object.

//--------------------------------------------------------------------

// Optional Chaining (.?)

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

//--------------------------------------------------------------------

// Looping Objects: Object keys, values and entries

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const value = Object.values(openingHours);
// console.log(value);

// // // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// // // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

//--------------------------------------------------------------------

// SETS

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const positions = [...new Set(staff)];
// console.log(positions);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jonasschmedtmann').size);

//--------------------------------------------------------------------

// MAPS: Fundamentals

// Best way to create a map is to create an empty map and add elements
// const rest = new Map();
// rest.set('Name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('Open', 11)
//   .set('Close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('Name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// // Example
// const time = 21;
// console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

// console.log(rest.has('Categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//--------------------------------------------------------------------

// Maps: Iteration

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Jave'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// // Iterations
// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//--------------------------------------------------------------------

// Summary: Which Data Structure to use?

//--------------------------------------------------------------------

// Working with strings - Part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline[6]);

// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// // Example (Check if the seat is a middle seat, B and E is middle seats)
// const checkMiddleSeat = function (seat) {
//   const seatLetter = seat.slice(-1);
//   if (seatLetter === 'B' || seatLetter === 'E') {
//     console.log('You have a middle seat!😂');
//   } else {
//     console.log(`You don't have a middle seat!🎉`);
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Jonas'));
// console.log(typeof new String('Jonas'));

//--------------------------------------------------------------------

// Working with strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Exercise

// const correctName = function (name) {
//   const nameLower = name.toLowerCase();
//   const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
//   console.log(nameCorrect);
// };

// correctName('ChERELINe');
// correctName('jAcQuEs');

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '    Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');

// console.log(priceGB);
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));
// // console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Pratcise exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('pocket knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board!');
//   } else {
//     console.log('Welcome aboard! :)');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//--------------------------------------------------------------------

// Working with strings - Part 3

// Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firtsName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firtsName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');
// capitalizeName('jacques till');

// // Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// // Example

// const maskCreditCard = function (number) {
//   const string = number + '';
//   const last = string.slice(-4);
//   return last.padStart(string.length, '*');
// };

// console.log(maskCreditCard(12345678));
// console.log(maskCreditCard(43371978914948));
// console.log(maskCreditCard('9149166648167816714'));

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

//--------------------------------------------------------------------

// String Methods Practice

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// console.log(flights);

// const strCopy = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
//     '_',
//     ' '
//   )} from ${strCopy(from)} to ${strCopy(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(45);
//   console.log(output);
// }

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(45);
//   console.log(output);+
// }
