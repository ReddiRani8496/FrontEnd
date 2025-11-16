let images = ["dog1.webp", "dog2.webp", "dog3.webp", "dog4.webp", "dog5.webp"];

let imageElement = document.querySelector("img");
let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");

let index = 0;

backButton.addEventListener("click", () => {
  // index= index-1;
  index--;

  imageElement.src = images[index];
  imageElement.alt = images[index];
  backButton.disabled = index == 0;
  nextButton.disabled = index == images.length - 1;
});

nextButton.addEventListener("click", () => {
  //index = index+1;
  index++;
  imageElement.src = images[index];
  imageElement.alt = images[index];

  nextButton.disabled = index == images.length - 1;
  backButton.disabled = index == 0;
});
