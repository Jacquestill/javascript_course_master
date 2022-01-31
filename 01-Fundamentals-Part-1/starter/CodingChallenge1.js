// // Coding Challenge 1

// /* Mark and John are tyring to compare their
// BMI, which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height).
// (mass in kg and height in meter)

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMI's using the formula
// (you can even implement both versions)
// 3. Create a boolean variable "markHigherBMI"
// containing information about whether Mark has a
// higher BMI than John.

// TEST DATA 1: Mark's weight is 78kg and is 1.69m tall.
// John's weight is 92kg and is 1.95m tall.
// TEST DATA 2: Mark's weight is 95kg and is 1.88m tall.
// John's weight is 85kg and is 1.76m tall.
// */


// // 1.
// const markWeight1 = 78;
// const markHeight1 = 1.69
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;

// const markBMI1 = markWeight1 / markHeight1 ** 2;
// const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// console.log(markBMI1, johnBMI1);

// const markHigherBMI1 = markBMI1 > johnBMI1;

// console.log(markHigherBMI1);

// //2.
// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;

// const markBMI2 = markWeight2 / markHeight2 ** 2;
// const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// console.log(markBMI2, johnBMI2);

// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log(markHigherBMI2);

// --------------------------------------------------

// // Coding Challenge #2

// /*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀
// */


// //1.
// if (markBMI1 > johnBMI1) {
//     console.log(`Mark's BMI is higher than John's!`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }

// if (markBMI2 > johnBMI2) {
//     console.log(`Mark's BMI is higher than John's!`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }

// //2.
// if (markBMI1 > johnBMI1) {
//     console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
// } else {
//     console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI})!`);
// }

// if (markBMI2 > johnBMI2) {
//     console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
// } else {
//     console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
// }

//----------------------------------------------------

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins the
a trophy!

1. Calculate the average score for each team, using
the test data below
2. Compare the team's average scores to determine
the winner of the competition, and print it to
the console. Don't forget that there can be a draw, so
test for that as well (draw means they have the same
average score).

3. BONUS 1: Include a requirement for a minimum score
of 100. With this rule, a team only wins if it has a
higher score than the other team, and the same time a
score of at least 100 points. HINT: Use a logical
operator to test for minimum score, as well as
multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw!
So a draw only happens when both teams have the same
score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89.
Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/* 1.
const dolphinAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinAverage, koalasAverage);

// 2.
if (dolphinAverage > koalasAverage) {
    console.log("Dolphins are the winners! :)");
} else if (dolphinAverage < koalasAverage) {
    console.log("Koalas are the Winners! :)");
} else if (dolphinAverage === KoalasAverage){
    console.log("Dolphins and Koalas drawed :(!");
}
*/

/*3.

// const dolphinAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
const dolphinAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;
console.log(dolphinAverage, koalasAverage);

const dolphinWin = dolphinAverage > koalasAverage;
const koalaWin = koalasAverage > dolphinAverage;
const dolphinMore100 = dolphinAverage >= 100;
const koalaMore100 = koalasAverage >= 100;

if (dolphinWin && dolphinMore100) {
    console.log("Dolphins won the competions!")
} else if (koalaWin && koalaMore100) {
    console.log("Koalas won the competition!")
} else if (dolphinWin && !dolphinMore100) {
    console.log("Dolphins didn't have more than 100!");
} else if (koalaWin && !koalaMore100) {
    console.log("Koalas didn't have more than 100!");
} else if (dolphinAverage === koalasAverage && dolphinAverage >= 100 && koalasAverage >= 100) {
    console.log("Game drawed!");
} else {
    console.log("No one wins the game");
}
*/

//----------------------------------------------------

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for
whenever he goes eating in a resturant. In his country,
it's usual to tip 15% if the bill value is between 50
and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the
bill value. Create a variable called 'tip' for this.
It's not allowed to use an if/else statement 😅
(If it's easier for you, you can start with an if/else
statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill
value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and
the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it
by 20/100 = 0.2
HINT: Value X is between 50 and 300,
if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
/*
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip},
and the total value is ${bill + tip}.`);
*/

// ---------------------------------------------------

// pratice
"use strict"
// Coding Challenge 1

/* Mark and John are tyring to compare their
BMI, which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula
(you can even implement both versions)
3. Create a boolean variable "markHigherBMI"
containing information about whether Mark has a
higher BMI than John.

TEST DATA 1: Mark's weight is 78kg and is 1.69m tall.
John's weight is 92kg and is 1.95m tall.
TEST DATA 2: Mark's weight is 95kg and is 1.88m tall.
John's weight is 85kg and is 1.76m tall.

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// Test data 1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// // Test data 2
// // const markWeight = 95;
// // const markHeight = 1.88;
// // const johnWeight = 85;
// // const johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
// } else {
//     console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
// }

//----------------------------------------------------------------

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins the
a trophy!

1. Calculate the average score for each team, using
the test data below
2. Compare the team's average scores to determine
the winner of the competition, and print it to
the console. Don't forget that there can be a draw, so
test for that as well (draw means they have the same
average score).

3. BONUS 1: Include a requirement for a minimum score
of 100. With this rule, a team only wins if it has a
higher score than the other team, and the same time a
score of at least 100 points. HINT: Use a logical
operator to test for minimum score, as well as
multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw!
So a draw only happens when both teams have the same
score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89.
Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// Test data
// const dolphinAverage = (96 + 108 + 89) / 3;
// const koalaAverage = (88 + 91 + 110) / 3;

// // Test data bonus 1
// // const dolphinAverage = (97 + 112 + 101) / 3;
// // const koalaAverage = (109 + 95 + 123) / 3;

// // Test data bonus 2
// // const dolphinAverage = (97 + 112 + 101) / 3;
// // const koalaAverage = (109 + 95 + 106) / 3;

// if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
//     console.log(`Dolphins are the winners!`);
// } else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
//     console.log(`Koalas are the winners!`);
// } else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
//     console.log(`It's a draw!`);
// } else {
//     console.log(`No team won :(`);
// }

//-------------------------------------------------------------

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for
whenever he goes eating in a resturant. In his country,
it's usual to tip 15% if the bill value is between 50
and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the
bill value. Create a variable called 'tip' for this.
It's not allowed to use an if/else statement 😅
(If it's easier for you, you can start with an if/else
statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill
value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and
the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it
by 20/100 = 0.2
HINT: Value X is between 50 and 300,
if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275;
// // const bill = 40;
// // const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill value is ${bill} and the tip is ${tip}, thus the total is ${bill + tip}`);
