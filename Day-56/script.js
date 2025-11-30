let inputElement = document.querySelector("input");
let submitButton = document.getElementById("submit");
let clearButton = document.getElementById("clear");
let message = document.getElementById("message");

submitButton.addEventListener("click", () => {
  let value = inputElement.value;
  let factors = 0;

  for (let i = 1; i <= value; i++) {
    if (value % i == 0) {
      factors++;
    }
  }

  console.log("factors", factors);

  if (factors == 2) {
    message.innerText = "Prime Number";
  } else {
    message.innerText = "Not Prime Number";
  }
});

clearButton.addEventListener("click", () => {
  message.innerText = "Result";
  inputElement.value = "";
});
