choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    number = Math.floor(Math.random() * 3);
    return choices[number];
}

choice = getComputerChoice();
console.log(choice);