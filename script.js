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
    if (playerChoice == "Rock" && computerChoice == "Paper")
    {
        resultComputer++;
        return("You lose! Rock beats Paper.");
    }
    else if (playerChoice == "Paper" && computerChoice == "Rock")
    {
        resultPlayer++;
        return("You win! Paper beats Rock.");
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors")
    {
        resultPlayer++;
        return("You win! Rock beats Scissors.");
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors")
    {
        resultComputer++;
        return("You lose! Scissors beat Paper.");
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper")
    {
        resultPlayer++;    
        return("You win! Scissors beat Paper.");
    }
    else if (playerChoice == "Scissors" && computerChoice == "Rock")
    {
        resultComputer++;
        return("You lose! Rock beats Scissors.");
    }
    else if(playerChoice == "Rock" && computerChoice== "Rock")
        return ("It's a tie.");
    else if (playerChoice == "Paper" && computerChoice == "Paper")
        return("It's a tie.");
    else if (playerChoice == "Scissors" && computerChoice == "Scissors")
        return("It's a tie.");
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

const buttons = document.querySelectorAll(".choicebtn");
const result = document.querySelector("#result");
result.style.cssText= "white-space: pre-line";
let resultPlayer = 0;
let resultComputer = 0;
buttons.forEach((button) => {
    button.addEventListener("click",function() { 
        result.textContent+=playRound(button.textContent,getComputerChoice())
                          + "  Current result is: " + resultPlayer +" : " +  resultComputer + "\r\n";
        if(resultPlayer == 5)
        {
            result.textContent+="\r\n" + "Congrats, you won the game! Final score is: Player: "
            + resultPlayer + " : " +resultComputer + " Computer." + "\r\n" + "The score will be resetted." + "\r\n\r\n";
            resultPlayer = 0;
            resultComputer = 0;
        }
        else if(resultComputer == 5)
        {
        result.textContent+="\r\n" + "Unfortunately, you lost the game! Final score is: Player: "
        + resultPlayer + " : " +resultComputer + " Computer." + "\r\n" + "The score will be resetted." + "\r\n\r\n";
        resultPlayer = 0;
        resultComputer = 0;
        }
    });
});
