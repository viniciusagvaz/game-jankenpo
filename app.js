const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("img");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
   possibleChoice.addEventListener("click", (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = `<p>Player</p><img src="./assets/${userChoice}.png" alt="${userChoice}"></img>`
      genarateComputerChoice();
      getResult();
   })
);

const genarateComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //* 3

   if (randomNumber === 1) {
      computerChoice = "rock";
   }
   if (randomNumber === 2) {
      computerChoice = "paper"
   }
   if (randomNumber === 3) {
      computerChoice = "scissors";
   }

   computerChoiceDisplay.innerHTML = `<p>Computer</p><img src="./assets/${computerChoice}.png" alt="${computerChoice}"></img>`;
}

const getResult = () => {
   computerChoice === userChoice ? result = "IT'S A DRAW!" : null

   computerChoice === "rock" && userChoice === "paper" ||
      computerChoice === "paper" && userChoice === "scissors" ||
      computerChoice === "scissors" && userChoice === "rock" ?
      result = 'YOU WIN!' : null

   computerChoice === "rock" && userChoice === "scissors" ||
      computerChoice === "paper" && userChoice === "rock" ||
      computerChoice === "scissors" && userChoice === "paper" ?
      result = 'YOU LOST!' : null

   resultDisplay.innerHTML = result
}