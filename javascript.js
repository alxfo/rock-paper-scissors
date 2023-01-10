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

// compare user input with computer

// return the results