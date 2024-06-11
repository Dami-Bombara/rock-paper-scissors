let choices = ["rock", "paper", "scissors"]

let computerScore = 0;
let humanScore = 0;

let computerChoice = 0;
let humanChoice = 0;

// DOM Manipulation //
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => humanChoice = choices[0]);
rockButton.addEventListener("click", function(){ playRound(getComputerChoice(), humanChoice); });

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => humanChoice = choices[1]);
paperButton.addEventListener("click", function(){ playRound(getComputerChoice(), humanChoice); });

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => humanChoice = choices[2]);
scissorsButton.addEventListener("click", function(){ playRound(getComputerChoice(), humanChoice); });

const humanPoints = document.querySelector("#human-score");
const computerPoints = document.querySelector("#pc-score");

const humanDecision = document.querySelector("#human-choice");
const computerDecision = document.querySelector("#pc-choice");

//************************************************************************* */

// Game logic //
function getComputerChoice() {
    number = Math.floor(Math.random() * 3);
    return choices[number];
}

function checkScore(callback) {
    if (computerScore == 5 || humanScore == 5) console.log("Game over!");
    callback();
}

function playRound(computerChoice, humanChoice) {
    checkScore(evaluate);

    if (computerChoice == humanChoice) {
        console.log("Draw!");
    }
    else if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
        console.log("You lose rock beats scissors!");
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        console.log("You lose paper beats rock!");
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        console.log("You lose scissors beats paper!");
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win rock beats scissors!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win paper beats rock!");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win scissors beats paper!");
    }

    computerDecision.textContent = "PC's choice: " + computerChoice;
    humanDecision.textContent = "Your choice: " + humanChoice;

    computerPoints.textContent = "PC's score: " + computerScore;
    humanPoints.textContent = "Your score: " + humanScore;
}

console.log("\n");

function evaluate() {
    console.log("Computer choice: " + computerChoice);
    console.log("Human choice: " + humanChoice);
    console.log("\n");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

/*while (humanScore != 5 || computerScore != 5) {
    if (humanChoice != 0) {
        computerChoice = getComputerChoice();

        playRound(computerChoice, humanChoice);

        console.log("Computer choice: " + computerChoice);
        console.log("Human choice: " + humanChoice);
        console.log("\n");
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
        humanChoice = 0;
    }
}*/