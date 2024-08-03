'use strict';
const body = document.querySelector('body');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const number = document.querySelector('.number');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

checkButton.addEventListener('click', function () {
  //   console.log(guess.value);
  let curGuess = Number(guess.value);
  if (!curGuess) {
    message.textContent = '⛔️ No number!';
  } else if (curGuess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = secretNumber;

    highscore = score > highscore ? score : highscore;
    highscoreLabel.textContent = highscore;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else {
    if (score > 0) {
      score--;
      scoreLabel.textContent = score;
      message.textContent =
        curGuess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    } else {
      message.textContent = '💥 You lost the game!';
    }
  }
});

againButton.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  guess.value = '';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  scoreLabel.textContent = score;

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});

guess.addEventListener('input', function () {
  let curGuess = Number(guess.value);

  if (curGuess > 20) {
    guess.value = 20;
  } else if (curGuess < 1) {
    guess.value = 1;
  }
});
