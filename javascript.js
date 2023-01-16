// the options for the computer to select from
const options = ['rock', 'paper', 'scissors']

// win and loss tracker variables
let wins = 0
let losses = 0

let computerChoice = options[Math.floor(Math.random() * options.length)];

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

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRPS('rock', computerChoice));
paperBtn.addEventListener('click', () => playRPS('paper', computerChoice));
scissorsBtn.addEventListener('click', () => playRPS('scissors', computerChoice));

const movesDiv = document.querySelector('#moves');
const resultsDiv = document.querySelector('#results');
const winsDiv = document.querySelector('#wins')
const lossesDiv = document.querySelector('#losses')