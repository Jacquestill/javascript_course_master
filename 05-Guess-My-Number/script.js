"use strict";

// How to select an element, DOM and DOM manipulation
// console.log(document.querySelector('.message').textContent);

// // DOM manipulation
// document.querySelector('.message').textContent = 'Correct Number!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When the player has no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚧 No number!';
    displayMessage("🚧 No number!");

    // When the player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage("🎉 Correct number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '🔥 GAME OVER!';
      displayMessage("🔥 GAME OVER!");
      document.querySelector(".score").textContent = 0;
    }

    //     // When guess is too high
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Too high!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '🔥 GAME OVER!';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 Too low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '🔥 GAME OVER!';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});

// Reset game with Again! button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 😀
// */

// Exercise ------------------------------------------------------------

// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// let highscore = 0;

// // Display message
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// let btnCheck = document.querySelector('.check');

// btnCheck.addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // No number selected
//   if (!guess) {
//     displayMessage('🚧 No number selected!');

//     // Guess is lower than secret number
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       displayMessage('📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('🔥 Game Over');
//       document.querySelector('.score').textContent = 0;
//     }

//     // Guess is higher than secret number
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       displayMessage('📈 Too high!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('🔥 Game Over');
//       document.querySelector('.score').textContent = 0;
//     }

//     // Guess is correct
//   } else if (guess === secretNumber) {
//     displayMessage('Good job, you won!🎉');

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (highscore < score) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   }
// });

// // Restart the game
// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   score = 20;

//   displayMessage('Start guessing...');

//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

console.log("Hello");
