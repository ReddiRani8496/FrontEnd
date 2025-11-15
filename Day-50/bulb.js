let image = document.querySelector("img");

let button = document.querySelector("button");

let mode = "off";

button.addEventListener("click", () => {
  if (mode == "off") {
    mode = "on";
    image.src = "bulb-on.webp";
    image.alt = "bulb on";
    button.innerText = "Off";
  } else if (mode == "on") {
    mode = "off";
    image.src = "bulb-off.jpg";
    image.alt = "bulb off";
    button.innerText = "On";
  }
});
