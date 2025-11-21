let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorElement = document.getElementById("scissor");

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let drawScore = document.getElementById("draw-score");

let messageElement = document.getElementById("message");

let user = 0;
let computer = 0;
let draw = 0;

let choices = ["rock", "paper", "scissor"];

// Math.random()

function updateScores(userChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log("computer clicked", computerChoice);
  console.log("user clicked", userChoice);

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
    user++;
    userScore.innerText = user;
    messageElement.innerText = `You Won! ${userChoice} beat ${computerChoice}`;
    messageElement.style.backgroundColor = "green";
  } else {
    computer++;
    computerScore.innerText = computer;
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
