// save options array to variable
const options = ['r', 'p', 's']

// randomly generate computer choice
let computerSelection = options[Math.floor(Math.random() * options.length)];
console.log(computerSelection);

// prompt user for input
let playerSelection = prompt('Please choose: Rock, Paper or Scissors?');
console.log(playerSelection);

// make playerSelection lower case
playerSelection = playerSelection.toLowerCase();

// take first letter from playerSelection
playerSelection = playerSelection[0]
console.log(playerSelection);

// declare function to compare user input with computer
function playRPS(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'r' && computerSelection === 's'){
        return 'You win!';
    } else if (playerSelection === 'p' && computerSelection === 'r'){
        return 'You win!';
    } else if (playerSelection === 's' && computerSelection === 'p'){
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// call the play function
console.log(playRPS(playerSelection, computerSelection));