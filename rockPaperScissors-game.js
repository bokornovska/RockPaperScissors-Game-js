function rockPaperScissors (playerTurn){
 const rock = "Rock";
 const scissors = "Scissors";
 const paper = "Paper";

 if (playerTurn === "r" || playerTurn === "rock"){
    playerTurn = rock;
    console.log(`You choose ${rock}`)
 }else if(playerTurn === "s" || playerTurn === "scissors"){
    playerTurn = scissors;
    console.log(`You choose ${scissors}`)
 }else if(playerTurn === "p" || playerTurn === "paper"){
    playerTurn = paper;
    console.log(`You choose ${paper}`)
 }else{
    console.log(`Invalid input! Try again...`)
 }

 let computerRandomNumber = Math.floor(Math.random()*3) + 1;

 switch (computerRandomNumber){
    case 1:
        computerRandomNumber = rock;
        break;
    case 2:
        computerRandomNumber = paper;
        break;
    case 3:
        computerRandomNumber = scissors;
        break;
 }

 let computerTurn = computerRandomNumber;
 console.log(`The computer chooses ${computerTurn}`)

 if((playerTurn === rock && computerTurn === scissors) || 
    (playerTurn === paper && computerTurn === rock) || 
    (playerTurn === scissors && computerTurn === paper)){

        console.log(`You win!`)
 }else if((computerTurn === rock && playerTurn === scissors) || 
          (computerTurn === paper && playerTurn === rock) || 
          (computerTurn === scissors && playerTurn === paper)){
    console.log(`You lose!`)
 }else{
    console.log(`This game was a draw!`)
 }

}

rockPaperScissors ("s")