let choices = ["rock", "paper", "scissors"]

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    number = Math.floor(Math.random() * 3);
    return choices[number];
}

function getHumanChoice() {
    return prompt("Rock, paper, scissors?").toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("Draw!");
    }
    else if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
    }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);
console.log("Computer choice: " + computerChoice);
console.log("Human choice: " + humanChoice);

console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);