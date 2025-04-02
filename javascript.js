const game = () => {
    let humanScore = 0;
    let computerScore = 0;
    let gamesLeft = 5;
    
    const playGame = () => {
        const rockBtn = document.querySelector('.rockBtn');
        const paperBtn = document.querySelector('.paperBtn');
        const scissorBtn = document.querySelector('.scissorBtn');
        const humanOptions = [rockBtn, paperBtn, scissorBtn];
        const humanScoreDiv = document.querySelector('.humanScore');
        const computerScoreDiv = document.querySelector('.computerScore');

        humanOptions.forEach(option => {
            option.addEventListener('click', function () {
                gamesLeft--;
                const computerChoice = getComputerChoice();
                const humanChoice = this.innerText.toLowerCase();
                const winner = playRound(humanChoice, computerChoice);
                if(winner == "human") {
                    humanScore++;
                    humanScoreDiv.textContent = humanScore;
                }
                if(winner == "computer") {
                    computerScore++;
                    computerScoreDiv.textContent = computerScore;
                }
                if(gamesLeft == 0) {
                    const finalWinner = gameOver(humanScore, computerScore);
                }      
            });
        });
    }

    playGame();
}

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

function playRound(humanChoice, computerChoice) {
    let winner = "none";
    const result = document.querySelector('.result');
    if((humanChoice == "rock" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "scissor") || 
    (humanChoice == "scissor" && computerChoice == "rock")) {
        winner = "computer";
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    } else {
        if((humanChoice == "rock" && computerChoice == "scissor") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissor" && computerChoice == "paper")) {
            result.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
            winner = "human";
        } else {
            result.textContent = "Draw, you chose " + humanChoice + " and computer chose " + computerChoice + ".";
        }
    }
    return(winner);
}

function gameOver(humanScore, computerScore) {
    let gameWinner = "none";
    const finalResult = document.querySelector('.gameOver');
    document.querySelector('.options').style.display = 'none';
    //document.querySelector('.result').style.display = 'none';
    if(humanScore > computerScore) {
        finalResult.textContent = "Game over! You won";
        gameWinner = "human";
    } else if(humanScore < computerScore) {
        finalResult.textContent = "Game over! You lost"
        gameWinner = "computer";
    } else {
        finalResult.textContent = "Game Over! it's a draw";
    }
    return gameWinner;
}

game();