"use strict";
// Elements Selection
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const restartBtn = document.querySelector(".restart");
const choicesBtns = document.querySelector(".choices");
const message = document.querySelector(".message");
const playerChoiceImg = document.querySelector(".player-choice-img");
const computerChoiceImg = document.querySelector(".comp-choice-img");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Functions
const displayMessage = (msg) => (message.textContent = msg);

const gameLogic = (choice) => {
  let playerChoice;
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  playerChoice = choice;
  if (computerChoice === playerChoice) {
    displayMessage("Draw 🤝");
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper")
  ) {
    displayMessage("Computer Wins 🤖");
    // openModal()
    // modal.textContent = "Computer Wins 🤖"
  } else {
    displayMessage("You Win 🎉");
    // openModal()
    // modal.textContent = "You Win 🎉"
  }

  // UI
  choicesBtns.classList.add("hidden");
  playerChoiceImg.classList.remove("hidden");
  playerChoiceImg.src = `./images/player-${playerChoice}.png`;
  computerChoiceImg.src = `./images/choice-${computerChoice}.png`;
};

const restartGame = () => {
  choicesBtns.classList.remove("hidden");
  playerChoiceImg.classList.add("hidden");
  computerChoiceImg.src = `./images/QMark.jpg`;
  displayMessage("Let's Play 🕹️");
};

rockBtn.addEventListener("click", () => gameLogic("rock"));

paperBtn.addEventListener("click", () => gameLogic("paper"));

scissorsBtn.addEventListener("click", () => gameLogic("scissors"));

restartBtn.addEventListener("click", restartGame);

document.addEventListener('keydown', function(e){
  if (e.key === "Tab") {
    e.preventDefault()
    restartGame()
  }
})

const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

overlay.addEventListener('click', closeModal)

