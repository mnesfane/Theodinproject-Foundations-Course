
let playerPoints = 0
let computerPoints = 0

 function cumputerRound(){
    let choice = ['rock','paper','scissor'];
    let randomNumber =  Math.floor(Math.random() * choice.length);

    return choice[randomNumber];
 }

function result(playerScore, computerScore){
    let again;
    if(playerPoints > computerPoints)
        again = confirm(`You Won GG| Player: ${playerPoints} | Computer: ${computerPoints}\n Play Again`);
    else
        again = confirm(`You Lost , another time| Player: ${playerPoints} | Computer: ${computerPoints}\n Play Again`);
    if (again){
        playerPoints = computerPoints = 0;
        playerScore.textContent = computerScore.textContent = 0
    }
}

function choosenWeaponSwitchFunc(weapon , weaponDiv){
    switch(weapon){
        case "rock":
            weaponDiv.textContent = "✊"
            break
        case "paper":
            weaponDiv.textContent = "✋"
            break
        case "scissor":
            weaponDiv.textContent = "✌️"
            break
        
    }
}

function showChoosenWeapon(player, computer){
    let playerWeaponDiv = document.getElementById('playerCHoosenWeaponDiv');
    let computerWeaponDiv = document.getElementById('computerCHoosenWeaponDiv');
    choosenWeaponSwitchFunc(player, playerWeaponDiv);
    choosenWeaponSwitchFunc(computer, computerWeaponDiv);
}

function roundResult(player, computer, playerScore, computerScore){
    let infoTilte = document.querySelector('.infoTitle')
    let infoMessage =document.querySelector('.infoMessage')
    if( player == computer){
        infoTilte.textContent = "It's a tie!"
        infoMessage.textContent = `${player} ties with ${computer}`;
        // alert(`paper ties with paper | Player: ${playerPoints} | Computer: ${computerPoints}`);
    }
    else if(player == "rock" && computer == "scissor" ||
    player == "scissor" && computer == "paper" ||
    player == "paper" && computer == "rock"){
        infoTilte.textContent = "You won!"
        playerScore.textContent =  ++playerPoints
        infoMessage.textContent = `${player} beats ${computer}`;
    }
    else{
        infoTilte.textContent = "You Lost!"
        computerScore.textContent =  ++computerPoints
        infoMessage.textContent = `${player} is beaten by ${computer}`;
        
    }
}

function main(player){
    let playerScore =document.querySelector('.playerScore')
    let computerScore =document.querySelector('.computerScore')
    let computer = cumputerRound();

    showChoosenWeapon(player, computer)
    if(playerPoints < 5 && computerPoints < 5){
        roundResult(player, computer, playerScore, computerScore);
    }
    if(playerPoints == 5 || computerPoints == 5)
        result(playerScore, computerScore);
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
