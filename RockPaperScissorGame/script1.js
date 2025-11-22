let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorElement = document.getElementById("scissor");

let userScore = document.getElementById("player1-score");
let computerScore = document.getElementById("player2-score");
let drawScore = document.getElementById("draw-score");

let messageElement = document.getElementById("message");

let player1 = 0;
let player2 = 0;
let draw = 0;

let choices = ["rock", "paper", "scissor"];

function updateScores(userChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log("player2 clicked", computerChoice);
  console.log("player1 clicked", userChoice);

  if (userChoice == computerChoice) {
    draw++;
    drawScore.innerText = draw;
    messageElement.innerText = "It's Draw";
    messageElement.style.backgroundColor = "black";
  } else if (
    (userChoice == "rock" && computerChoice == "scissor") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissor" && computerChoice == "paper")
  ) {
    player1++;
    userScore.innerText = player1;
    messageElement.innerText = `You Won! ${userChoice} beat ${computerChoice}`;
    messageElement.style.backgroundColor = "green";
  } else {
    player2++;
    computerScore.innerText = player2;
    messageElement.innerText = `You Lost! ${computerChoice} beat ${userChoice}`;
    messageElement.style.backgroundColor = "red";
  }
}

rockElement.addEventListener("click", () => {
  updateScores("rock");
});

paperElement.addEventListener("click", () => {
  updateScores("paper");
});

scissorElement.addEventListener("click", () => {
  updateScores("scissor");
});
