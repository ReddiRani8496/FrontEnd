const baseurl = "https://api.frankfurter.app/latest?";

let dropdowns = document.querySelectorAll(".dropdown select");
let button = document.querySelector("button");
let input = document.querySelector("input");
let fromCurrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");
let message = document.querySelector(".message");

for (let select of dropdowns) {
  for (let currencyCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currencyCode;
    newOption.value = currencyCode;
    if (select.name == "from" && currencyCode == "USD") {
      newOption.selected = true;
    } else if (select.name == "to" && currencyCode == "INR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (event) => {
    updateFlag(event.target.value, event.target);
  });
}

const updateFlag = (currencyCode, select) => {
  console.log(countryList[currencyCode]); // objectname[key] -> value of that key
  let image = select.parentElement.querySelector("img");
  image.src = `https://flagsapi.com/${countryList[currencyCode]}/flat/64.png`;
};

button.addEventListener("click", async (event) => {
  event.preventDefault();

  let amount = input.value;

  let url = `${baseurl}base=${fromCurrency.value}&symbols=${toCurrency.value}`;

  let response = await fetch(url);
  let data = await response.json();

  let totalAmount = data["rates"][toCurrency.value] * amount;

  //1USD = 89.39INR
  message.innerText = `${amount} ${fromCurrency.value} = ${totalAmount} ${toCurrency.value}`;
});
