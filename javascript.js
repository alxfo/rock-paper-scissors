// the options for the computer to select from
const options = ['rock', 'paper', 'scissors']

// win and loss tracker variables
let wins = 0
let losses = 0

let computerChoice = options[Math.floor(Math.random() * options.length)];

// function to play a single round and increment the appropriate tracker
function playRPS(playerSelection, computerSelection) {
    console.log(`You picked ${playerSelection}`);
    console.log(`The AI picked ${computerSelection}`)
    if (playerSelection === computerSelection) {
        console.log('It\'s a tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        wins += 1;
        console.log('You win!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        wins += 1;
        console.log('You win!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        wins += 1;
        console.log('You win!');
    } else {
        losses += 1;
        console.log('You lose!');
    }
    console.log(`Wins: ${wins}`)
    console.log(`Losses: ${losses}`)
    computerChoice = options[Math.floor(Math.random() * options.length)];
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


rockBtn.addEventListener('click', () => playRPS('rock', computerChoice));
paperBtn.addEventListener('click', () => playRPS('paper', computerChoice));
scissorsBtn.addEventListener('click', () => playRPS('scissors', computerChoice));