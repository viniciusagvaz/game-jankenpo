const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    genarateComputerChoice();
    getResult();
  })
);

function genarateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //* 3

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
  if (computerChoice === userChoice){
    result = 'It s a draw!' 
  }
  if (computerChoice === 'rock' && userChoice === 'paper'){
    result = 'you win!'; 
  }
  if (computerChoice === 'rock' && userChoice === 'scissors'){
    result = 'you lost!'; 
  }
  if (computerChoice === 'paper' && userChoice === 'scissors'){
    result = 'you win!'; 
  }
  if (computerChoice === 'paper' && userChoice === 'rock'){
    result = 'you lost!'; 
  }
  if (computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'you win!'; 
  }
  if (computerChoice === 'scissors' && userChoice === 'paper'){
    result = 'you lost!'; 
  }
  resultDisplay.innerHTML = result
}