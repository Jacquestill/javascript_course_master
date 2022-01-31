"use strict";

// Functions
/*
function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} people and its capital city is ${capitalCity}.`);
}

const southafrica = describeCountry("South Africa", 58, "Cape Town");
const southkorea = describeCountry("South Korea", 55, "Seoul");
const usa = describeCountry("USA", 70, "Washington");
*/
//--------------------------------------------------------------

// Function Declarations vs. Expressions
/*
function percentageOfWorld1(countryPopulation) {
    return (countryPopulation / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const china1 = console.log(percentageOfWorld1(1441));
const southAfrica1 = console.log(percentageOfWorld1(58));
const finland1 = console.log(percentageOfWorld1(6));
// const china2 = console.log(percentageOfWorld2(1441));
// const southAfrica2 = console.log(percentageOfWorld2(58));
// const finland2 = console.log(percentageOfWorld2(6));

// Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100;

const china3 = console.log(percentageOfWorld3(1441));
const southAfrica3 = console.log(percentageOfWorld3(58));
const finland3 = console.log(percentageOfWorld3(6));
*/
//--------------------------------------------------------------

// Functions Calling Other Functions
/*
function percentageOfWorld1(countryPopulation) {
    return (countryPopulation / 7900) * 100;
}

const describeCountry = function (country, population) {
    return console.log(`${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`);
}

describeCountry("South Africa", 58);
describeCountry("China", 1441);
describeCountry("USA", 332);
*/
//----------------------------------------------------------------

// Practice

// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
//     return;
// }
// const southafrica = describeCountry("South Africa", 58, "Cape Town");
// const southkorea = describeCountry("South Korea", 50, "Seoul");
// const finland = describeCountry("Finland", 6, "Helsinki");


// function percentageOfWorld1(population) {
//     let populationPercentage = (population / 7900) * 100;
//     return console.log(populationPercentage);
// }

// const percentageOfWorld2 = function (population) {
//     console.log((population / 7900) * 100);
//     return;
// }

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const southafricaPercentage1 = percentageOfWorld1(58);
// const southkoreaPercentage1 = percentageOfWorld1(50);
// const chinaPercentage1 = percentageOfWorld1(1441);
// const southafricaPercentage2 = percentageOfWorld2(58);
// const southkoreaPercentage2 = percentageOfWorld2(50);
// const chinaPercentage2 = percentageOfWorld2(1441);
// const southafricaPercentage3 = console.log(percentageOfWorld3(58));
// const southkoreaPercentage3 = console.log(percentageOfWorld3(50));
// const chinaPercentage3 = console.log(percentageOfWorld3(1441));


// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//     return console.log(`${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world!`);
// }

// const southafricaDescribe = describePopulation("South Africa", 58);
// const southkoreaDescribe = describePopulation("South Korea", 50);
// const chinaDescribe = describePopulation("China", 1441);

//------------------------------------------------------------------

// Introduction to Arrays

// const population = [10, 1441, 332, 83];
// console.log(population.length === 4);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3])];
// console.log(percentages);

//------------------------------------------------------------------

// Basic Array Operations (Methodes)

// const neighbours = ["Namibia", "Botswana", "Zimbabwe"];
// console.log(neighbours);

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//     console.log("Probably not a central European country :D");
// }

// neighbours[neighbours.indexOf("Botswana")] = "Republic of Botswana";
// console.log(neighbours);

//------------------------------------------------------------------

// Introduction to Objects

// const myCountry = {
//     country: "South Africa",
//     capital: "Cape Town",
//     language: "English",
//     population: 58,
//     neighbours: ["Namibia", "Botswana", "Zimbabwe"]
// };

// console.log(myCountry);

//------------------------------------------------------------------

// DOT vs. Bracket Notation

// const myCountry = {
//     country: "South Africa",
//     capital: "Cape Town",
//     language: "English",
//     population: 58,
//     neighbours: ["Namibia", "Botswana", "Zimbabwe"]
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;

// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry["population"]);

//------------------------------------------------------------------

// Object Methods

// const myCountry = {
//     country: "South Africa",
//     capital: "Cape Town",
//     language: "English",
//     population: 58,
//     neighbours: ["Namibia", "Botswana", "Zimbabwe"],

//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}, this is ${this.checkIsland()} island.`);
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

//------------------------------------------------------------------

// Iteration: The For Loop

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

//------------------------------------------------------------------

// Looping Arrays, Breaking and Continuing

// const population = [10, 1441, 332, 83];
// const population2 = [];
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// for (let i = 0; i < population.length; i++) {
//     population2.push(percentageOfWorld1(population[i]));
// }
// console.log(population, population2);

//------------------------------------------------------------------

// Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//     ["Canada", "Mexico"],
//     ["Spain"],
//     ["Norway", "Sweden", "Russia"]
// ];
// console.log(listOfNeighbours);

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     const neighbours = listOfNeighbours[i];
//     for (let x = 0; x < neighbours.length; x++) {
//         console.log(`Neighbour: ${neighbours[x]}`);
//     }
// }

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let y = 0; y < listOfNeighbours[i].length; y++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//     }
// }

//------------------------------------------------------------------

// The While Loop

// const population = [10, 1441, 332, 83];
// const percentage3 = [];
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// let i = 0;
// while (i < population.length) {
//     percentage3.push(percentageOfWorld1(population[i]));
//     i++;
// }
// console.log(percentage3);