
const options = ['Rock', 'Paper', 'Scissors'];
const playerSelection = 'Rock'

let computerPlay = options[Math.floor(Math.random()*options.length)];
    
console.log('Computer Choice: ' + computerPlay);
console.log('Player Choice: ' + playerSelection);


function playRound(playerSelection, computerPlay) {
    if (playerSelection.toLowerCase() === 'rock' && computerPlay.toLowerCase() === 'rock') {
        return (`Tie! ${playerSelection} equals ${computerPlay}`)
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerPlay.toLowerCase() === 'paper') {
        return ('You lose... Paper beats rock')
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerPlay.toLowerCase() === 'scissors') {
        return ('You win! Rock beats scissors')
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerPlay.toLowerCase() === 'rock') {
        return ('You win! Paper beats rock')
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerPlay.toLowerCase() === 'paper') {
        return ('Tie! Paper equals paper')
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerPlay.toLowerCase() === 'scissors') {
        return ('You lose...Scissors beats paper')
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerPlay.toLowerCase() === 'rock') {
        return ('You lose...Rock beats scissors')
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerPlay.toLowerCase() === 'paper') {
        return ('You win! Scissors beat paper')
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerPlay.toLowerCase() === 'scissors') {
        return ('Tie! Scissors equals scissors')
    }
    else return ('Error')
    
}

playRound(playerSelection, computerPlay);
console.log(playRound(playerSelection, computerPlay));


















//const options = ['Rock', 'Paper', 'Scissors'];
//const playerSelection = 'Rock';


//let computerPlay = options[Math.floor(Math.random()*options.length)];

//const computerSelection = computerPlay;

//function playRound(playerSelection, computerSelection) {
//    if ((playerSelection === 'Rock') && (computerSelection === 'Rock')) {
//        alert('Tie! Rock equals Rock')
//    }
//    else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
//        alert('You lose! Paper beats Rock')
//    }
//    else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
//        alert('You Win! Rock beats Scissors')
//    }
//    else {
//        alert('Error, game couldn\'t run')
//    }
//}

//playRound()



















































//function computerPlay() {
//    let computerChoice = options[Math.floor(Math.random()*options.length)];
//    return computerChoice //= options[Math.floor(Math.random()*options.length)];
//}


//***   user input UI prompt box */
//function promptPlayerChoice() {
//    let playerChoice = prompt('Choose Rock, Paper, Scissors');
//    return playerChoice.toLowerCase();
    
    
    //****maybe**** */
    //if (playerChoice.toLowerCase === 'rock') {
    //    return 'Rock';
   // }
    //else if (playerChoice.toLowerCase === 'paper') {
   //     return 'Paper';
   // }
   // else if (playerChoice.toLowerCase === 'scissors') {
   //     return 'Scissors';
  //  }
   // else {
   //     return 'Incorrect Input'
   // }
    
//    console.log(playerChoice)
    //if (playerSelection. === to'Rock') {
    //    return ('Rock');}
    //if('Paper') return 'Paper';
    //if('Scissors') return 'Scissors';
    //else return 'Incorrect input, try again';
//}

//** user input UI prompt */
//let playerSelection = promptPlayerChoice();

//switch (playerSelection) {
//    case "rock":
//        result = "Rock";
//        break;
//    case "paper":
//        result = "Paper";
//        break;
//    case "scissors":
//        result = "Scissors";
//        break;
//    default:
//        result = "Incorrect Input";
//}

//console.log(computerPlay)
//playerChoice()
//console.log(playerChoice)
//promptPlayerChoice()
//console.log(playerSelection)
//console.log(promptPlayerChoice)
//console.log(playerSelection)
