// the AI's choice
const options = ['rock', 'paper', 'scissors']
let computerChoice = options[Math.floor(Math.random() * options.length)];

// points to play until
let maxPoints = 5

// win and loss trackers
let wins = 0
let losses = 0

// function to play a single round and increment the appropriate tracker

function playRPS(playerSelection, computerSelection) {
    movesDiv.textContent=`${playerSelection} vs. ${computerSelection}!`;
    if (playerSelection === computerSelection) {
        resultsDiv.textContent='The round is tied!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        wins += 1;
        resultsDiv.textContent='You win the round!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        wins += 1;
        resultsDiv.textContent='You win the round!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        wins += 1;
        resultsDiv.textContent='You win the round!';
    } else {
        losses += 1;
        resultsDiv.textContent='You lose the round!';
    }

    winsDiv.textContent=wins
    lossesDiv.textContent=losses
    computerChoice = options[Math.floor(Math.random() * options.length)];

    if (wins === maxPoints || losses === maxPoints) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        if (wins > losses) {
            resultsDiv.textContent='YOU WIN'
        } else {
            resultsDiv.textContent='YOU LOSE'
        }
    }
}

// function to reset the game

function resetGame() {
    wins = 0
    losses = 0
    movesDiv.textContent='';
    resultsDiv.textContent='';
    winsDiv.textContent='0';
    lossesDiv.textContent='0';

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

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
const winsDiv = document.querySelector('#wins-tracker');
const lossesDiv = document.querySelector('#loss-tracker');