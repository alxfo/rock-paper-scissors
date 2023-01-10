// the options for the computer to select from
const options = ['rock', 'paper', 'scissors']

// win and loss tracker variables
let wins = 0
let losses = 0

// function to play a single round and increment the appropriate tracker
function playRPS(playerSelection, computerSelection) {
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
}

// function to play 5 rounds and declare whether you win or lose
function game(){
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`)
        let computerSelection = options[Math.floor(Math.random() * options.length)];
        let playerSelection = prompt('Please choose: Rock, Paper or Scissors?');
        playerSelection = playerSelection.toLowerCase();
        playRPS(playerSelection, computerSelection)
    }
    if (wins > losses) {
        console.log('You win the game!');
    } else if (wins < losses) {
        console.log('You lose the game!');
    } else {
        console.log('You tie the game!');
    }
}

game()