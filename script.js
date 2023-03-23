function getComputerChoice(){
    let choice = Math.floor(Math.random()* 3) + 1;
    if (choice == 1)
        choice = "Rock";
    else if (choice == 2)
        choice = "Paper";
    else if( choice == 3)
        choice ="Scissors";
    return choice;
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    if (playerChoice == computerChoice)
        return ("It's a tie.");
    else if (playerChoice == "Rock" && computerChoice == "Paper")
        return("You lose! Rock beats Paper.");
    else if (playerChoice == "Paper" && computerChoice == "Rock")
        return("You win! Paper beats Rock.");
    else if (playerChoice == "Rock" && computerChoice == "Scissors")
        return("You win! Rock beats Scissors.");
    else if (playerChoice == "Paper" && computerChoice == "Scissors")
        return("You lose! Scissors beat Paper.");
    else if (playerChoice == "Scissors" && computerChoice == "Paper")
        return("You win! Scissors beat Paper.");
    else if (playerChoice == "Scissors" && computerChoice == "Rock")
        return("You lose! Rock beats Scissors.");
}

function checkScore(result){
    if(result.includes("It's a tie."))
        return 0;
    else if(result.includes("You win!"))
    {
        return 1;
    }
    else if(result.includes("You lose!"))
    {
        return 2;
    }
}



function game(){
    let playerScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++)
    {
        let computerChoice = getComputerChoice()
        let playerChoice = prompt("Please enter your sign.")
        console.log(playRound(playerChoice,computerChoice));
        if(checkScore(playRound(playerChoice,computerChoice)) == 1)
            playerScore++;
        else if(checkScore(playRound(playerChoice,computerChoice)) == 2)
            computerScore++;
    }   
    if(playerScore == computerScore)
            alert(`It's a draw! Result is Player:Computer = ${playerScore} : ${computerScore}.`);
    else if(playerScore > computerScore)
            alert(`You have won the game! Result is Player:Computer = ${playerScore} : ${computerScore}.`);
    else if(playerScore < computerScore)
            alert(`You have lost the game! Result is Player:Computer = ${playerScore} : ${computerScore}.`);

}


game();