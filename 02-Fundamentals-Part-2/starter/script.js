"use strict";

/* Section 3: 32 (Activating Stick Mode)
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 999;

// Always use strict mode when coding.
*/
//-----------------------------------------------------

/* Section 3: 33 (Functions)

function logger() {
    console.log("My name is Jacques");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);
*/
//-----------------------------------------------------

/*Section 3: 34 (Function Declarations vs. Expressions)

// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }
// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
//------------------------------------------------------

/* Section 3: 35 (Arrow Functions)

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1980, "Bob"));
console.log(yearUntilRetirement(1995, "Jacques"));
*/
//--------------------------------------------------------

/* Section 3: 36 (Functions Calling Other Functions)

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
//----------------------------------------------------------

/* Section 3: 37 (Reviewing Functions)

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearUntilRetirement(1991, "Jacques"));
console.log(yearUntilRetirement(1950, "Mike"));
*/
//-----------------------------------------------------------

// Section 3: 39 (Introduction to Arrays)

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// // Literal Syntex []
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Bob", "Alice"];   (can not be done, you can change a variable but not the whole array)

// const firstname = "Jonas";
// const jonas = [firstname, "Schmedtmann", 2037 - 1991, "Teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//-----------------------------------------------------------

// Section 3: 40 (Basic Array Operators (Methods))

// const friends = ["Michael", "Steven", "Peter"];
// // Add Elements, at the back
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // Add Elements, in the front
// friends.unshift("John");
// console.log(friends);

// // Remove Elements, the last one
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Remove Elements, the first one
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// // To check if the value is in the array
// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//     console.log(`You have a friend called Steven`)
// }

//-----------------------------------------------------------

// Section 3: 42 (Introduction to Objects)

// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"]
// ];

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"]
// };

// console.log(jonas);

//-----------------------------------------------------------

// Section 3: 43 (DOT vs. Bracket Notation)

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"]
// };
// console.log(jonas);

// // DOT Notation
// console.log(jonas.lastName);

// // Bracket Notation
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// Excercise

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.");

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request!Choose between firstName, lastName, age, job and friends.")
// }

// Adding new properties to the object

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschemedtmann";
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

//-----------------------------------------------------------

// Section 3: 44 Object Methods

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
//     }

// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a(no) driver's license"
// console.log(jonas.getSummary());

//-----------------------------------------------------------

// Section 3: 46 (Iteration: The for Loop)

// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 2 🏋️‍♂️");
// console.log("Lifting weights repetition 3 🏋️‍♂️");
// console.log("Lifting weights repetition 4 🏋️‍♂️");
// console.log("Lifting weights repetition 5 🏋️‍♂️");
// console.log("Lifting weights repetition 6 🏋️‍♂️");
// console.log("Lifting weights repetition 7 🏋️‍♂️");
// console.log("Lifting weights repetition 8 🏋️‍♂️");
// console.log("Lifting weights repetition 9 🏋️‍♂️");
// console.log("Lifting weights repetition 10 🏋️‍♂️");

// For Loop, keeps running while condition is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

//-----------------------------------------------------------

// Section 3: 47 (Looping Arrays, Breaking and Continuing)

// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "Teacher",
//     ["Michael", "Peter", "Steven"],
//     true
// ];

// const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[3]);
// console.log(jonasArray[4]);
// jonasArray[5] does NOT exist

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // Filling types array
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }

// // console.log(types);

// // Filling Arrays with For Loop
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// // console.log(ages);

// // Continue and Break
// // Continue
// console.log("--- Only Strings ---")
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== "string") continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// // Break
// console.log("--- Break with Number")
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === "number") break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

//-----------------------------------------------------------

// Section 3: 48 (Looping backwards and loops in loops)

// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "Teacher",
//     ["Michael", "Peter", "Steven"],
//     true
// ];

// // Looping Backwards (4,3,2,1,0)
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }

// // Loops inside Loops
// for (let excercise = 1; excercise <= 3; excercise++) {
//     console.log(`--- Starting Excercise ${excercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Excercise ${excercise}: Lifting Weights repetition ${rep}💪!`);
//     }
// }

//-----------------------------------------------------------

// Section 3: 49 (The While Loop)

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`Loop is about to end...`);
//     }
// }

