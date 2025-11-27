const url = "https://official-joke-api.appspot.com/random_joke";

// fetch(url) -> to make api call and get the data

// async and await

let buttonElement = document.getElementById("button");
let jokeElement = document.getElementById("joke");

const getJoke = async () => {
  const response = await fetch(url);
  const data = await response.json(); // javascript object notation
  jokeElement.innerText = data.setup;
};

buttonElement.addEventListener("click", getJoke);
