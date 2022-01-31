/*
// Values and Variables
const homeCountry = "South Africa";
let homeContinent = "Africa";
let homePopulation = 58;

let currentCountry = "South Korea";
let currentContinent = "Asia";
let currentPopulation = 52;

console.log(homeCountry, homeContinent, homePopulation);
console.log(currentCountry, currentContinent, currentPopulation);
*/
//--------------------------------------------------------------

/*
//  Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof currentPopulation);
console.log(typeof homeCountry);
console.log(typeof language);
*/
//--------------------------------------------------------------

/*
// let, const and var
language = "Afrikaans";

console.log(homeCountry);
console.log(language);
*/
//--------------------------------------------------------------

/*
// Basic Operators
let halfPopulation = homePopulation / 2;
console.log(halfPopulation);

homePopulation++;
console.log(homePopulation);

let finlandPopulation = 6;
console.log(homePopulation > finlandPopulation);

let avgPopulation = 33;
console.log(homePopulation < avgPopulation);

//const description = "Portugal is in Europe, and 11 million people speak portuguese.";
//console.log(description);
const description1 = homeCountry +
    " is in " +
    homeContinent +
    ", and " +
    homePopulation / 10 +
    " million people speak " +
    language;
console.log(description1);
*/
//--------------------------------------------------------------
/*
const country = "South Africa";
const continent = "Africa";
let population = 58;

const halfCountry = population / 2;
console.log(halfCountry);

population++;
console.log(population);

const finPopulation = 6;
console.log(population > finPopulation);
console.log(population < 33);

//String and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak english`;
console.log(description);

//Taking Decisions: if/else Statements
if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million belowe average.`);
}

//Type Conversion and Coercion

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
*/
//--------------------------------------------------------------

// Equality Operators: == vs. ===
/*
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No border");
}
*/
//--------------------------------------------------------------

// Logical Operators
/*
const country = "South Africa";
const continent = "Africa";
const population = 58;
const language = "English";
const island = false;

if (language === "English" && population < 50 && !island) {
    console.log(`You should live in ${country} :).`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/
//--------------------------------------------------------------

// Switch Statement
/*
const language = "English";

switch (language) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers.");
        break;
    case "English":
        console.log("3rd place.");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language.");
        break;
    default:
        console.log("Great language too :D");
}
*/
//--------------------------------------------------------------

// Conditional (Ternary) Operator
/*
const country = "South Africa";
const population = 58;

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average.`);
*/
//--------------------------------------------------------------

// practice
// "use strict"

// const country = "South Africa";
// const continent = "Africa";
// let population = 59;
// const island = false;

// console.log(country, continent, population);

// const language = "English";

// let halfPopulation = population / 2;
// console.log(halfPopulation);
// population++;
// console.log(population);

// if (population > 6) {
//     console.log("South Africa has more people than Finland.")
// } else {
//     console.log("South Africa has less people than Finland.");
// }

// if (population > 33) {
//     console.log("South Africa has more people than the average country.");
// } else {
//     console.log("South Africa has less people than the average country.");
// }

// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// console.log(description);

// '9' - '5'; // 4
// '19' - '13' + '17'; // 617
// '19' - '13' + 17; // 23
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; // 1143

// // const numNeighbours = prompt("How many neighbour countries does your country have?");

// // if (Number(numNeighbours) === 1) {
// //     console.log("Only 1 border!");
// // } else if (numNeighbours > 1) {
// //     console.log("More than 1 border!");
// // } else {
// //     console.log("No border");
// // }



// if (language === "English" && population < 50 && !island) {
//     console.log(`You should live in ${country} :)`)
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// switch (language) {
//     case "Chinese":
//     case "Mandarin":
//         console.log("MOST number of native speaker!");
//         break;
//     case "Spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "English":
//         console.log("3rd place");
//         break;
//     case "Hindi":
//         console.log("Number 4");
//         break;
//     case "Arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
// }

// console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average.`);
//-------------------------------------------------------------------