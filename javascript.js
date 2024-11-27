function getComputerChoice() {
    let randomNumber = Math.random();
    let choice;
    //console.log(randomNumber);
    switch (true) {
        case (randomNumber<0.3):
          choice = "Rock";
          break;
        case (randomNumber>0.3 && randomNumber<0.6):
          choice = "Paper";
          break;
        case (randomNumber>0.6):
          choice = "Scissor";
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
      //console.log(choice);
    return(choice);
}

let computerChoice = getComputerChoice();
console.log(computerChoice);