function getComputerChoice() {
    let randomNumber = Math.random();
    let choice;
    //console.log(randomNumber);
    switch (true) {
        case (randomNumber<0.3):
          choice = "rock";
          break;
        case (randomNumber>0.3 && randomNumber<0.6):
          choice = "paper";
          break;
        case (randomNumber>0.6):
          choice = "scissor";
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
      //console.log(choice);
    return(choice);
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissor").toLowerCase();
    while(choice != "rock" && choice != "paper" && choice != "scissor") {
        choice = prompt("ERROR: choose rock, paper or scissor");
    }
    return(choice)
}

function playRound(humanChoice, computerChoice) {
    let winner = "none";
    if((humanChoice == "rock" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "scissor") || 
    (humanChoice == "scissor" && computerChoice == "rock")) {
        winner = "computer"
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    } else {
        if((humanChoice == "rock" && computerChoice == "scissor") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissor" && computerChoice == "paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            winner = "human"
        } else {
            console.log("Draw, you chose " + humanChoice + " and computer chose " + computerChoice + ".");
        }
    }
    return(winner);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for(let i=0; i<5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let roundWinner;
        
        console.log(computerChoice);
        console.log(humanChoice);

        roundWinner = playRound(humanChoice, computerChoice);
        if(roundWinner == "human")
            humanScore += 1;
        else if(roundWinner == "computer")
            computerScore += 1;

        console.log("your score: " + humanScore);
        console.log("computer score: " + computerScore);
    }

    if(humanScore > computerScore)
        console.log("Congratulations, you won the game!");
    else if(humanScore < computerScore)
        console.log("Bad luck, you lose the game");
    else
        console.log("Its a draw, try again");
        
}

//playGame();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

