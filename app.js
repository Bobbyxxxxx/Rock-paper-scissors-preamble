const choices = ["paper", "scissors", "rock"];
const playerDisplay = document.querySelector(".playerChoice");
const computerDisplay = document.querySelector(".computerChoice");
const resultDisplay =  document.querySelector(".resultDisplay");
const playerMark = document.querySelector(".playermark")
const computerMark = document.querySelector(".computermark")
let playerResult = 0;
let computerResult = 0;

function playGame(playerChoice){
    let result = "";
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
            break;
    }
     
    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText")
            playerResult++
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText")
            computerResult++;
            break;
    }

    playerDisplay.textContent = playerChoice;
    computerDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
    playerMark.textContent = playerResult;
    computerMark.textContent = computerResult;
}