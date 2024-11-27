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
    let choice = prompt("Choose rock, paper or scissor").toLowerCase;
    while(choice != "rock" && choice != "paper" && choice != "scissor") {
        choice = prompt("ERROR: choose rock, paper or scissor");
    }
    return(choice)
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(computerChoice);
console.log(humanChoice)