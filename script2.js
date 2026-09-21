let userScore = 0;
let computerscore =  0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}; 

const drawgame = () => {
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin) => {
   if(userwin){
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = "you win!";
    msg.style.backgroundColor = "green";
   }else{
    computerscore++;
    computerscorepara.innerText = computerscore;
    msg.innerText = "you lose.";
    msg.style.backgroundColor = "red";
   }
}

const playgame = (userchoice) => {
   const ComputerChoice = genComputerChoice();

   if(userchoice === ComputerChoice){
    drawgame();
   }else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = ComputerChoice === "paper" ? false : true;
    } else if(userchoice === "paper"){
        userwin = ComputerChoice === "scissors" ? false : true;
    }else{
        userwin = ComputerChoice === "rock" ? false : true;
    }
    showWinner(userwin);
   }
}  

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
   playgame(userchoice);
  });
});