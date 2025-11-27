let firstWordElement = document.getElementById("firstword");
let secondWordElement = document.getElementById("secondword");
let result = document.getElementById("result");
let buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", () => {
  let firstword = firstWordElement.value.trim().toLowerCase();
  let secondword = secondWordElement.value.trim().toLowerCase();

  if (firstword.length != secondword.length) {
    result.innerText = "Not Anagrams";
  } else {
    firstword = firstword.split("").sort().join("");
    secondword = secondword.split("").sort().join("");

    if (firstword == secondword) {
      result.innerText = "Anagrams";
    } else {
      result.innerText = "Not Anagrams";
    }
  }
});
