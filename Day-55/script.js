let dropdowns = document.querySelectorAll(".dropdown select");

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
