
let playerPoints = 0
let comuterPoints = 0

 function cumputerRound(){
    let choice = ['rock','paper','scissor'];
    let randomNumber =  Math.floor(Math.random() * choice.length);

    return choice[randomNumber];
 }

//  let comt = ()=>{
//     console.log(3)
//  }
//  comt()

// function rock(){
//     if(playerPoints > 5 || comuterPoints > 5)
//         alert("refresh")
//     else{
//         round++;
//         cumputerRound();

//     }
// }

function main(player){
    let computer = cumputerRound();

    if(playerPoints < 5 && comuterPoints < 5){
        if (computer == 'rock'){
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
        else if (computer == 'paper'){
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
        else if (computer == 'scissor'){
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
    }
    if(playerPoints == 5 || comuterPoints == 5){
        let again;
        if(playerPoints > comuterPoints)
            again = confirm(`You Won GG| Player: ${playerPoints} | Computer: ${comuterPoints}\n Play Again`);
        else
            again = confirm(`You Lost , another time| Player: ${playerPoints} | Computer: ${comuterPoints}\n Play Again`);
        if (again){
            playerPoints = comuterPoints = 0;
        }
    }
}