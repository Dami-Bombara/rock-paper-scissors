let choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

let computerChoice = 0;
let humanChoice = 0;

// DOM Manipulation //
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => humanChoice = choices[0]);
rockButton.addEventListener("click", function(){ playRound(computerChoice = getComputerChoice(), humanChoice); });

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => humanChoice = choices[1]);
paperButton.addEventListener("click", function(){ playRound(computerChoice = getComputerChoice(), humanChoice); });

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => humanChoice = choices[2]);
scissorsButton.addEventListener("click", function(){ playRound(computerChoice = getComputerChoice(), humanChoice); });

const humanPoints = document.querySelector("#human-score");
const computerPoints = document.querySelector("#pc-score");

const humanDecision = document.querySelector("#human-choice");
const computerDecision = document.querySelector("#pc-choice");

const gameStatus = document.querySelector("#game-status");
const winner = document.createElement("p");


//************************************************************************* */

// Game logic //
function getComputerChoice() {
    number = Math.floor(Math.random() * 3);
    return choices[number];
}

function playRound(computerChoice, humanChoice) {
    if      (computerChoice == "rock" && humanChoice == "scissors")  computerScore++;
    else if (computerChoice == "paper" && humanChoice == "rock")     computerScore++;
    else if (computerChoice == "scissors" && humanChoice == "paper") computerScore++;

    else if (humanChoice == "rock" && computerChoice == "scissors")  humanScore++;
    else if (humanChoice == "paper" && computerChoice == "rock")     humanScore++;
    else if (humanChoice == "scissors" && computerChoice == "paper") humanScore++;

    checkScore();
    evaluate();
}

function evaluate() {
    computerDecision.textContent = "PC's choice: " + computerChoice;
    humanDecision.textContent = "Your choice: " + humanChoice;

    computerPoints.textContent = "PC's score: " + computerScore;
    humanPoints.textContent = "Your score: " + humanScore;
}

function checkScore() {
    if (computerScore == 5) {
        winner.textContent = "You lose!";
        gameStatus.appendChild(winner);
    }
    else if (humanScore == 5) {
        winner.textContent = "You win!";
        gameStatus.appendChild(winner);
    }
}