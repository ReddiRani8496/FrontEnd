let boxes = document.querySelectorAll(".box");

let winnerMessage = document.querySelector(".winner-message");

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
};
