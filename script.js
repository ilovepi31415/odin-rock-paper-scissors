const bRock = document.querySelector('#rock');
const bPaper = document.querySelector('#paper');
const bScissors = document.querySelector('#scissors');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
const matchupText = document.querySelector('#matchup');
const resultText = document.querySelector('#result');
let computerScore = 0;
let playerScore = 0;
let catScore = 0;

bRock.addEventListener('click', () => {
    playRound(0);
});

bPaper.addEventListener('click', () => {
    playRound(1);
});

bScissors.addEventListener('click', () => {
    playRound(2);
});

// Play round
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    // let humanChoice = getHumanChoice();
    displayWinner(computerChoice, humanChoice);
}

// Get computer choice
function getComputerChoice() {
    // choices: 'Rock', 'Paper', 'Scissors'
    return Math.floor(Math.random() * 3)
}

// Get human choice
function getHumanChoice() {
    let choice = prompt('Choose either "Rock", "Paper", or "Scissors"');
    if (choice == 'Rock') {
        return 0;
    }
    else if (choice == 'Paper') {
        return 1;
    }
    else if (choice == 'Scissors') {
        return 2;
    }
    alert('Invalid input');
    getHumanChoice();
}

// Figure out who wins
function displayWinner(computer, human) {
    choices = ['Rock', 'Paper', 'Scissors'];
    matchupText.textContent = `${choices[human]} vs ${choices[computer]}`;
    diff = (human - computer + 3) % 3;
    if (diff == 0) {
        catScore++;
        resultText.textContent = "You tie.";
    }
    else if (diff == 1) {
        playerScore++;
        resultText.textContent = "You win!";
    }
    else {
        computerScore++;
        resultText.textContent = "You lose...";
    }
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
}