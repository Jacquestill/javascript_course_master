'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// --- Account MOVEMENTS ---
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${move} €</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// --- Account BALANCE ---

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// --- Account Summary IN, OUT and INTEREST ---

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${income} €`;

  const outcome = acc.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(outcome)} €`;

  const interest = acc.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

// --- Account OWNER Initials ---
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

// Function to update the UI
const updateUI = function (acc) {
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

// Login Account Button
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer Money Button
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // Reset and empty input blocks
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan Money Button
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(move => move > amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Close Account Button
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
});

// Sort Button - Ascending
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// --- Simple Array Methods ---

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE - Doesn't change the original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE - Change the original array
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE - Change the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - Doesn't change the original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

//-------------------------------------------------------------------

// --- Looping Arrays: ForEach ---

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const move of movements) {
// for (const [i, move] of movements.entries()) {
//   if (move > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${move}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(move)}`);
//   }
// }

// console.log('--- FOREACH ---');
// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${move}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(move)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Difference between forEach and forOf, is that you can break free from the forOf and not from the forEach loop.

//-------------------------------------------------------------------

// --- ForEach with Maps and Sets ---

// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

//-------------------------------------------------------------------

// --- Creating DOM Elements ----

//-------------------------------------------------------------------

// --- Data Transformation: Map, Filter, Reduce ---

//-------------------------------------------------------------------

// --- The Map Method ---

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// // Using map function
// const movementsUSD = movements.map(function (move) {
//   return Math.trunc(move * euroToUsd);
// });

// console.log(movements);
// console.log(movementsUSD);

// // Using for loop while adding into empty array
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(Math.trunc(mov * euroToUsd));
// console.log(movementsUSDfor);

// // Using map with an arrow function
// const arrowUSD = movements.map(move => Math.trunc(move * euroToUsd));
// console.log(arrowUSD);

// // Exercise
// const movementsDescriptions = movements.map((move, i) => {
//   return `Movement ${i + 1}: You ${
//     move > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(move)}`;
// });
// console.log(movementsDescriptions);

//-------------------------------------------------------------------

// --- Computing Usernames ---

//-------------------------------------------------------------------

// --- The Filter Method ---

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (move, i, arr) {
//   return move > 0;
// });
// const withdrawals = movements.filter(move => move < 0);
// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

// const depositsFor = [];
// for (const move of movements) if (move > 0) depositsFor.push(move);
// console.log(depositsFor);

//-------------------------------------------------------------------

// --- The Reduce Method ---

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // Accumulator -> SNOWBALL
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// // Using For loop
// let sum = 0;
// for (const mov of movements) sum += mov;
// console.log(sum);

// // Maximum Value
// const max = movements.reduce(
//   (acc, move) => (acc > move ? acc : move),
//   movements[0]
// );
// console.log(max);

// // Minimum Value
// const min = movements.reduce(
//   (acc, move) => (acc < move ? acc : move),
//   movements[0]
// );
// console.log(min);

//-------------------------------------------------------------------

// --- The Magic of Chaining Methods ---

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(move => move > 0)
//   // .map((move, i, arr) => {
//   //   console.log(arr);
//   //   return move * euroToUsd;
//   // })
//   .map(move => move * euroToUsd)
//   .reduce((acc, move) => acc + move, 0);

// console.log(totalDepositsUSD);

//-------------------------------------------------------------------

// --- The Find Method ---

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdraw = movements.find(move => move < 0);
// console.log(firstWithdraw);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') console.log(acc);
// }

//-------------------------------------------------------------------

// --- SOME and EVERY ---

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));

// // SOME: CONDITION
// console.log(movements.some(move => move === -130));

// const anyDeposits = movements.some(move => move > 1500);
// console.log(anyDeposits);

// // EVERY
// console.log(movements.every(move => move > 0));
// console.log(account4.movements.every(move => move > 0));

// // Separate callback
// const deposit = move => move > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//-------------------------------------------------------------------

// --- FLAT and FLATMAP ---

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // FLAT
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, move) => acc + move, 0);
// console.log(overallBalance);

// // FLATMAP
// const overalBalance2 = accounts
//   .flatMap(arr => arr.movements)
//   .reduce((acc, move) => acc + move, 0);
// console.log(overalBalance2);

//-------------------------------------------------------------------

// --- Sorting Arrays ---

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // const ascending = movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// const ascending = movements.sort((a, b) => a - b);
// console.log(ascending);

// // Decending
// // const decending = movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// const decending = movements.sort((a, b) => b - a);
// console.log(decending);

//-------------------------------------------------------------------

// --- More ways of creating and filling arrays ---

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// // Exercise
// const dice = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// );
// console.log(dice);

// // Example for Array.from

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

//-------------------------------------------------------------------

// --- Which Array method to use?

//-------------------------------------------------------------------

// --- Array Methods Pratice ---

// 1.
// const bankDepositSum = accounts
//   .flatMap(arr => arr.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepositSum);

// // 2.
// // const numDeposit1000 = accounts
// //   .flatMap(arr => arr.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposit1000 = accounts
//   .flatMap(arr => arr.movements)
//   .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
// console.log(numDeposit1000);

// // Prefixed ++ operator
// let a = 10;
// console.log(++a);

// // 3.
// const { deposits, withdrawls } = accounts
//   .flatMap(arr => arr.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawls: 0 }
//   );
// console.log(deposits, withdrawls);

// // 4.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exception = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exception.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

//-------------------------------------------------------------------
