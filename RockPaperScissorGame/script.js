let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorElement = document.getElementById("scissor");

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let drawScore = document.getElementById("draw-score");

let messageElement = document.getElementById("message");

let turnElement = document.querySelector(".turn-message");

let user = 0;
let computer = 0;
let draw = 0;

let firstPlayer = true;

let choices = ["rock", "paper", "scissor"];

let player1Choice = "";
let player2Choice = "";

function updateScores() {
  if (player1Choice == player2Choice) {
    draw++;
    drawScore.innerText = draw;
    messageElement.innerText = "It's Draw";
    messageElement.style.backgroundColor = "black";
    player1Choice = "";
    player2Choice = "";
    firstPlayer = true;

    turnElement.innerText = "Player 1 Turn";
  } else if (
    (player1Choice == "rock" && player2Choice == "scissor") ||
    (player1Choice == "paper" && player2Choice == "rock") ||
    (player1Choice == "scissor" && player2Choice == "paper")
  ) {
    user++;
    userScore.innerText = user;
    messageElement.innerText = `Player1 Won! ${player2Choice} beat ${player1Choice}`;
    messageElement.style.backgroundColor = "green";
    player1Choice = "";
    player2Choice = "";
    firstPlayer = true;
    turnElement.innerText = "Player 1 Turn";
  } else {
    computer++;
    computerScore.innerText = computer;
    messageElement.innerText = `Player2 Won! ${player2Choice} beat ${player1Choice}`;
    messageElement.style.backgroundColor = "green";
    console.log("line 555");
    player1Choice = "";
    player2Choice = "";
    firstPlayer = true;
    turnElement.innerText = "Player 1 Turn";
  }
}

rockElement.addEventListener("click", () => {
  console.log("inside rock");
  if (firstPlayer) {
    player1Choice = "rock";
    firstPlayer = false;
    turnElement.innerText = "Player 2 Turn";
  } else {
    player2Choice = "rock";
    updateScores();
  }
});

paperElement.addEventListener("click", () => {
  if (firstPlayer) {
    player1Choice = "paper";
    firstPlayer = false;
    turnElement.innerText = "Player 2 Turn";
  } else {
    player2Choice = "paper";
    updateScores();
  }
});

scissorElement.addEventListener("click", () => {
  if (firstPlayer) {
    player1Choice = "scissor";
    firstPlayer = false;
    turnElement.innerText = "Player 2 Turn";
  } else {
    player2Choice = "scissor";
    updateScores();
  }
});
