
let playerPoints = 0
let comuterPoints = 0

 function cumputerRound(){
    let choice = ['rock','paper','scissor'];
    let randomNumber =  Math.floor(Math.random() * choice.length);

    return choice[randomNumber];
 }
function rockByComputer(player){
    if (player == 'rock')
        alert(`Rock ties with Rock | Player: ${playerPoints} | Computer: ${comuterPoints}`);
    else if(player == 'paper'){
        playerPoints++;
        alert(`Paper beats Rock | Player: ${playerPoints} | Computer: ${comuterPoints}`);
    }
    else if(player == 'scissor'){
        comuterPoints++;
        alert(`Scissor is beaten by a Rock| Player: ${playerPoints} | Computer: ${comuterPoints}`);
    }
}


function paperByComputer(player){
    if (player == 'paper')
        alert(`paper ties with paper | Player: ${playerPoints} | Computer: ${comuterPoints}`);
    else if(player == 'scissor'){
        playerPoints++;
        alert(`Scissor beats paper | Player: ${playerPoints} | Computer: ${comuterPoints}`);
    }
    else if(player == 'rock'){
        comuterPoints++;
        alert(`Rock is beaten by a paper| Player: ${playerPoints} | Computer: ${comuterPoints}`);
    }
}


function scissorByComputer(player){
    if (player == 'scissor')
        alert(`Scissor ties with Scissor | Player: ${playerPoints} | Computer: ${comuterPoints}`);
    else if(player == 'rock'){
        playerPoints++;
        alert(`Rock beats Scissor | Player: ${playerPoints} | Computer: ${comuterPoints}`);
    }
    else if(player == 'paper'){
        comuterPoints++;
        alert(`Paper is beaten by a Scissor| Player: ${playerPoints} | Computer: ${comuterPoints}`);
    }
}

function result(){
    let again;
    if(playerPoints > comuterPoints)
        again = confirm(`You Won GG| Player: ${playerPoints} | Computer: ${comuterPoints}\n Play Again`);
    else
        again = confirm(`You Lost , another time| Player: ${playerPoints} | Computer: ${comuterPoints}\n Play Again`);
    if (again){
        playerPoints = comuterPoints = 0;
    }
}

function main(player){
    let computer = cumputerRound();

    if(playerPoints < 5 && comuterPoints < 5){
        if (computer == 'rock')
            rockByComputer(player);
        else if (computer == 'paper')
            paperByComputer(player);
        else if (computer == 'scissor')
            scissorByComputer(player);
    }
    if(playerPoints == 5 || comuterPoints == 5)
        result();
}


// function computerPlay() {
//     const options = ["rock", "paper", "scissors"];
//     return options[Math.floor(Math.random() * options.length)];
// }

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     if (!["rock", "paper", "scissors"].includes(playerSelection)) {
//         return "Invalid selection! Please choose rock, paper, or scissors.";
//     }

//     if (playerSelection === computerSelection) {
//         return "It's a tie!";
//     } else if (
//         (playerSelection === "rock" && computerSelection === "scissors") ||
//         (playerSelection === "paper" && computerSelection === "rock") ||
//         (playerSelection === "scissors" && computerSelection === "paper")
//     ) {
//         return `You win! ${playerSelection} beats ${computerSelection}.`;
//     } else {
//         return `You lose! ${computerSelection} beats ${playerSelection}.`;
//     }
// }

// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();
