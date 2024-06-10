let choices = ["rock", "paper", "scissors"]

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    number = Math.floor(Math.random() * 3);
    return choices[number];
}

function getHumanChoice() {
    return prompt("Choose: Rock, paper, scissors.").toLowerCase();
}

function playRound(computerChoice, humanChoice) {
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
}

console.log("\n");
let computerChoice = 0;
let humanChoice = 0;

for (let i = 0; i <= 4; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    playRound(computerChoice, humanChoice);

    console.log("Computer choice: " + computerChoice);
    console.log("Human choice: " + humanChoice);
    console.log("\n");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}