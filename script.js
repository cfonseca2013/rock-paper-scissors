let playerScore = 0;
let computerScore = 0;

function computerPlay () {
  
    let randomNumber = Math.random()

    if (randomNumber < 0.33) {
        return "rock"
    }
    else if (0.34 < randomNumber < 0.66) {
        return "paper"
    }
     else {
        return "scissors"
    }
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a Tie!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return "Your a Winner"
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "Your a Loser"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return "Your a Loser"
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return "Your a Winner"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;    
        return "Your a Winner"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return "Your a Loser"
        
    }
}

function game () {
    playerScore = 0
    computerScore = 0
    for (let i=0; i<5; i++){
        let playerSelection = prompt("Pick Rock, Paper, or Scissors!")

        let result = playRound(playerSelection, computerPlay())

        console.log(result)
        }

        if(playerScore > computerScore)
        console.log ('Game Over...Congrats your the winner!!')

        else if(playerScore < computerScore)
        console.log ('Game Over....Sorry, but your a loser!!!')

        else {
            console.log ('Game Over....You Tied!')
        }

        console.log("The Final Score: You: " + playerScore  + ' '  + "Computer: " + computerScore)
    }

    game()


