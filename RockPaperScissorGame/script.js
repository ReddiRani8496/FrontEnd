let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorElement = document.getElementById("scissors");
let drawScore = document.getElementById("draw-score");
let userScoreElement = document.getElementById("user-score");
let computerScoreElement = document.getElementById("computer-score");
let messageElement = document.getElementById("message");

let userClick = "";

let user = 0,
  computer = 0,
  draw = 0;

let choices = ["rock", "paper", "scissor"];

function playGame(userClick) {
  let computerClick = choices[Math.floor(Math.random() * 3)];

  if (computerClick == userClick) {
    draw++;
    drawScore.innerText = draw;
    messageElement.innerText = "It's Draw";
    messageElement.style.backgroundColor = "black";
  } else if (
    (userClick == "rock" && computerClick == "scissor") ||
    (userClick == "paper" && computerClick == "rock") ||
    (userClick == "scissor" && computerClick == "paper")
  ) {
    user++;
    userScoreElement.innerText = user;
    messageElement.innerText = `You won! ${userClick} beats ${computerClick}`;
    messageElement.style.backgroundColor = "green";
  } else {
    computer++;
    computerScoreElement.innerText = computer;
    messageElement.innerText = `You lost. ${computerClick} beats ${userClick}`;
    messageElement.style.backgroundColor = "red";
  }
}

rockElement.addEventListener("click", () => {
  playGame("rock");
});

paperElement.addEventListener("click", () => {
  playGame("paper");
});

scissorElement.addEventListener("click", () => {
  playGame("scissor");
});
