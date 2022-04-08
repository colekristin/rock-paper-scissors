const options = ['Rock', 'Paper', 'Scissors']

let computerPlay = options[Math.floor(Math.random()*options.length)];

   console.log(computerPlay)

//function computerPlay() {
//    let computerChoice = options[Math.floor(Math.random()*options.length)];
//    return computerChoice //= options[Math.floor(Math.random()*options.length)];
//}

function promptPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper, Scissors");
    return playerChoice.toLowerCase();
    
    
    //if (playerSelection. === to'Rock') {
    //    return ('Rock');}
    //if('Paper') return 'Paper';
    //if('Scissors') return 'Scissors';
    //else return 'Incorrect input, try again';
}

let playerSelection = promptPlayerChoice();

switch (playerSelection) {
    case "rock":
        result = "Rock";
        break;
    case "paper":
        result = "Paper";
        break;
    case "scissors":
        result = "Scissors";
        break;
    default:
        result = "Incorrect Input";
}

console.log(computerPlay)
//playerChoice()
//console.log(playerChoice)
//promptPlayerChoice()
//console.log(playerSelection)
//console.log(promptPlayerChoice)
console.log(playerSelection)
