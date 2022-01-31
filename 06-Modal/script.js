'use strict';

// Assigning variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function for closing modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Function for opening modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Opening modal by clicking on the show modal buttons
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Close modal by clicking on the close button or on the overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Use esc key to close the modal window
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Exercise -----------------------------------------------------------

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
