// Play round
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    displayWinner(computerChoice, humanChoice);
}

// Get computer choice
function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Get human choice
function getHumanChoice() {

}

// Figure out who wins
function displayWinner(computer, human) {

}

// Play game
let computerScore = 0;
let humanScore = 0;
for (i = 0; i < 5; i++) {
    playRound();
}