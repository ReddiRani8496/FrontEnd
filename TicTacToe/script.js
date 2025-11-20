let boxes = document.querySelectorAll(".box");

let winnerMessage = document.querySelector(".winner-message");

let messageContainer = document.querySelector(".message-container");

let newGameButton = document.querySelector(".new-game-btn");

let resetGameButton = document.querySelector(".reset-game-btn");

let turnO = true;

let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
    }
    winner();
  });
});

const showWinner = (winnerName) => {
  messageContainer.classList.remove("hide");
  winnerMessage.innerText = `Congratulations 👏 Winner is ${winnerName}`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const winner = () => {
  winningPatterns.forEach((pattern) => {
    let firstVal = boxes[pattern[0]].innerText;
    let secondVal = boxes[pattern[1]].innerText;
    let thirdVal = boxes[pattern[2]].innerText;
    if (firstVal != "" && secondVal != "" && thirdVal != "") {
      if (firstVal == secondVal && secondVal == thirdVal) {
        showWinner(firstVal);
      }
    }
  });
  let draw = true;
  boxes.forEach((box) => {
    if (box.innerText == "") {
      draw = false;
    }
  });
  if (draw) {
    messageContainer.classList.remove("hide");
    winnerMessage.innerText = `Game is ended with Draw`;
    boxes.forEach((box) => {
      box.disabled = true;
    });
  }
};

const resetTheGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });

  messageContainer.classList.add("hide");
  turnO = true;
};

newGameButton.addEventListener("click", resetTheGame);

resetGameButton.addEventListener("click", resetTheGame);
