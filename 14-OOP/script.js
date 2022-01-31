'use strict';

//-----------------------------------------------------------------------

// --- Constructor Functions and The New Operator ---
// const Person = function (firstName, birthYear) {
//   // Instance Properties
//   this.firstName = firstName;
//   this.birthYea = birthYear;

//   // Never do this, never create a method in a constructor function
//   //   this.calcAge = function () {
//   //       console.log(2037-this.birthYear);
//   //   };
// };

// const jonas = new Person('Joans', 1991);
// console.log(jonas);

// // NB!
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1995);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

//-----------------------------------------------------------------------

// --- Prototypes ---

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person('Joans', 1991);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1995);

// console.log(Person.prototype);

// // Use this method to add functions to the construtor function
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// // Step 3 creates the __proto__ property
// console.log(jonas.__proto__);
// console.log(Person.prototype);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(jack));
// console.log(Person.prototype.isPrototypeOf(Person));

// // prototype === .prototypeOfLinkedObjects (Not real method)

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

//-----------------------------------------------------------------------

// --- Prototypal Inheritance on Built-In Objects ---

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person('Joans', 1991);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1995);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// Person.prototype.species = 'Homo Sapiens';

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// // Arrays
// const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

//-----------------------------------------------------------------------

// --- ES6 Classes ---

// Class Expression
// const PersonCl = class {}

// Class Declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

//-----------------------------------------------------------------------

// --- Setters and Getters ---

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;

// console.log(account.movements);
// console.log(account.latest);

//----------------------------

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullname = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullname;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// const jacques = new PersonCl('Jacques Till', 1995);

// console.log(jessica.age);
// console.log(jessica);

//-----------------------------------------------------------------------

// --- Static Classes ---

// Constructor Function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);

// Person.hey = function () {
//   console.log(`Hey there 👋`);
//   console.log(this);
// };
// Person.hey();

// // ES6 Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // Static Method
//   static hey() {
//     console.log(`Hey there 👋`);
//     console.log(this);
//   }
// }

// PersonCl.hey();

//-----------------------------------------------------------------------

// --- Object.create ---

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

//-----------------------------------------------------------------------

// --- Inheritance between "Classes": ---
// --- Constructor Functions ---

// Parent Class
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // Child Class
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Connecting Child's prototypes with the parent
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}!`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//-----------------------------------------------------------------------

// --- Inheritance between "Classes": ---
// --- ES6 Classes ---

// // Parent Class
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullname = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullname;
//   }

//   // Static Method
//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// // Child Class
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen firts!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}!`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years old, but as a student I feel like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

//-----------------------------------------------------------------------

// --- Inheritance between "Classes": ---
// --- Object.create ---

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Conmputer Science');
// jay.introduce();
// jay.calcAge();

//-----------------------------------------------------------------------

// --- Another Class Example ---

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.local = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}!`);
//   }

//   // Public Interface
//   deposite(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposite(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposite(val);
//       console.log(`Loan Approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposite(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);

// console.log(acc1);
// console.log(acc1.pin);

// -----------------------------------------------------------------------

// --- Encapsulation: ---
// ---Protected Properties and Methods --- (using the _ to encapsulate)
// AND
// --- Private Class Fields and Methods ---

// 1. Public Fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
// (there is also the static version)

// class Account {
//   // 1. Public Fields (instances)
//   locale = navigator.language;

//   // 2. Private Fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected Property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thank you for opening an account, ${owner}!`);
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   // 3. Public Methods

//   // Public Interface
//   deposite(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposite(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val))
//     if (this._approveLoan(val)) {
//       this.deposite(val);
//       console.log('Loan Approved');
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   // 4. Private Methods
//   //   #approveLoan(val)
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposite(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);
// console.log(acc1.getMovements());
// Account.helper();

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));

// ------------------------

// --- Chaining Methods ---
// acc1.deposite(300).deposite(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

// -----------------------------------------------------------------------
