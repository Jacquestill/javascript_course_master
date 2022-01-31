/* Section 2: 1-11 (Values and Variables)
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jacques");
console.log(25);

let firstName = "Jacques"
let age = 25;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jacques_chereline = "JC";
let $function = 28;
let PI = 3.1415;

let myFirstJob = "Analyst";
let myCurrentJob = "Teacher";

console.log(jacques_chereline);
console.log(myFirstJob);
*/
//----------------------------------------------------

/* Section 2: 12 (Data Types)
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jacques");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(typeof year);

console.log(typeof null);
*/
//----------------------------------------------------

/* Section 2: 13 (let, const and var)
let age = 30;
age = 31;

const birthYear = 1995;

var job = "Analyst";
job = "Teacher";

lastName = "Till";
console.log(lastName);
*/
//----------------------------------------------------

/* Section 2: 14 (Basic Operators)
const currentYear = 2021;
const ageJacques = currentYear - 1995;
const ageChereline = currentYear - 1992;
console.log(ageJacques, ageChereline);

console.log(ageJacques * 2, ageChereline / 2, 2 ** 3);
// 2 **3 means to the power of 3

const firstName = "Jacques";
const lastName = "Till";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJacques > ageChereline); // >, <, >=, <=
console.log(ageChereline >= 18);

const isFullAge = ageChereline >= 18;

console.log(currentYear - 1992 > currentYear - 2018);
*/
//----------------------------------------------------

/*Section 2: 15 (Operator Precedence)
const now = 2037;
const ageJacques = now - 1991;
const ageChereline = now - 2018;
console.log(ageJacques, ageChereline);

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, y = 10, x = 10
console.log(x, y);

const averageAge = (ageJacques + ageChereline) / 2;
console.log(ageJacques, ageChereline, averageAge);
*/
//----------------------------------------------------

/* Section 2: 17 (Strings and Template Literals)
//Sting
const firstName = "Jacques";
const job = "teacher";
const birthYear = 1995;
const now = 2021;

const jacques = "I'm " + firstName + ", a " +
    (now - birthYear) + " year old " + job + "!";
console.log(jacques);

//Template literals
const jacquesNew = `I'm ${firstName}, a ${now -
    birthYear} year old ${job}!`;
console.log(jacquesNew);

console.log(`Just a regular stirng...`);

console.log("Stirng with \n\
multiple \n\
lines");

console.log(`String
multiple
line`);
*/
//----------------------------------------------------

/* Section 2: 18 (if / esle Statements)
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
//----------------------------------------------------

/* Section 2: 20 (Type Conversion and Coerion)
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jacques"));
console.log(typeof NaN); // NaN not a valid number

console.log(String(23), 23);

// Type Coercion
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);
*/
//----------------------------------------------------

/* Section 2: 21 (Truthy and Falsy Values)
// There are 5 falsy values: 0, "", undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jacques"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined")
} else {
    console.log("Height is undefined");
}
*/
//----------------------------------------------------

/* Section 2: 22 (Equality Operators: == vs. ===)

const age = 18;

// === is the strict equality operator, doesn't do coercion
if (age === 18) console.log("You just became an adult!");

// == is the loose equality operator, does type coercion
if (age == "18") console.log("You just became an adult!(loose)");


const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // "23" == 23
    console.log("Cool! 23 is an amazing number");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else if (favorite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 7 or 23 or 9");
}

if (favorite !== 23) {
    console.log("Why not 23?");
}
*/
//----------------------------------------------------

// Section 2: 23 (Boolean Logic)
//Basic Boolean Logic: AND, OR & NOT operators

/*Section 2:24 (Logical Operators)

const hasDriversLicense = true; // B
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision &&
    isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...");
}
*/
//----------------------------------------------------

/* Section 2: 26 (The Switch Statement)

const day = "Friday";

switch (day) {
    case "Monday": // day === "Monday" (Does a strick comparison)
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "Tuesday":
        console.log("Prepare theory videos");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write code examples");
        break;
    case "Friday":
        console.log("Record videos");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === "Monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "Tuesday") {
    console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
    console.log("Write code examples");
} else if (day === "Friday") {
    console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day");
}
*/
//----------------------------------------------------

/*Section 2: 27 (Statements and Expressions)

//Expressions (Can be seen as words, produces a value)
3 + 4
1991
true && false && !false

//Statements (Can be seen as sentences, actions we want to perform)
if (23 > 10) {
    const str = "23 is bigger";
}

const me = "Jacques";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/
//----------------------------------------------------

/*Section 2: 28 (The Conditional (Ternary) Operator)

const age = 25;
age >= 18 ? console.log("I like to drink wine!🍷") :
    console.log("I like to drink juice!🧃");

const drink = age >= 18 ? "wine!🍷" : "juice!🧃";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine!🍷";
} else {
    drink2 = "juice!🧃";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine!🍷" :
    "juice!🧃"}`)
*/

