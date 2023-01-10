// save options array to variable
const options = ['rock', 'paper', 'scissors']

// randomly generate computer choice
let computerSelection = options[Math.floor(Math.random() * options.length)];

// prompt user for input
let playerSelection = prompt('Please choose: Rock, Paper or Scissors?');

// make playerSelection lower case
playerSelection = playerSelection.toLowerCase();

// declare function to compare user input with computer
function playRPS(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// call the play function
console.log(playRPS(playerSelection, computerSelection));