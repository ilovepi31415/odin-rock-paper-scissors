const bRock = document.querySelector('#rock');
const bPaper = document.querySelector('#paper');
const bScissors = document.querySelector('#scissors');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
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
    console.log(`Your choice: ${choices[human]}`);
    console.log(`Computer choice: ${choices[computer]}`);
    diff = (human - computer + 3) % 3;
    if (diff == 0) {
        catScore++;
        console.log("You tied.");
    }
    else if (diff == 1) {
        playerScore++;
        console.log("You win!");
    }
    else {
        computerScore++;
        console.log("You lose...")
    }
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    console.log(`${playerScore}-${computerScore}-${catScore}`);
}