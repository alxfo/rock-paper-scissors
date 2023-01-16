// the AI's choice
const options = ['rock', 'paper', 'scissors']
let computerChoice = options[Math.floor(Math.random() * options.length)];

// win and loss trackers
let wins = 0
let losses = 0

// function to play a single round and increment the appropriate tracker

function playRPS(playerSelection, computerSelection) {
    movesDiv.textContent=`${playerSelection} vs. ${computerSelection}!`;
    if (playerSelection === computerSelection) {
        resultsDiv.textContent='It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        wins += 1;
        resultsDiv.textContent='You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        wins += 1;
        resultsDiv.textContent='You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        wins += 1;
        resultsDiv.textContent='You win!';
    } else {
        losses += 1;
        resultsDiv.textContent='You lose!';
    }
    winsDiv.textContent=`Wins: ${wins}`
    lossesDiv.textContent=`Losses: ${losses}`
    computerChoice = options[Math.floor(Math.random() * options.length)];
}

// function to reset the game

function resetGame() {
    wins = 0
    losses = 0
    movesDiv.textContent='Choose your move!';
    resultsDiv.textContent='Awaiting move';
    winsDiv.textContent='Wins: 0';
    lossesDiv.textContent='Losses: 0';
    computerChoice = options[Math.floor(Math.random() * options.length)];
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset');

rockBtn.addEventListener('click', () => playRPS('rock', computerChoice));
paperBtn.addEventListener('click', () => playRPS('paper', computerChoice));
scissorsBtn.addEventListener('click', () => playRPS('scissors', computerChoice));
resetBtn.addEventListener('click', () => resetGame());

const movesDiv = document.querySelector('#moves');
const resultsDiv = document.querySelector('#results');
const winsDiv = document.querySelector('#wins');
const lossesDiv = document.querySelector('#losses');