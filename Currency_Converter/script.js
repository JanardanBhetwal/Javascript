const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const selects = document.querySelectorAll("select");
const btn = document.querySelector("button");
const amt = document.querySelector("#amount");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const message = document.querySelector("#msg");

for (let select of selects) {
  for (let code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    select.append(newOption);
  }
  select.addEventListener("change", (e) => {
    updateFlag(e);
  });
}

function updateFlag(e) {
  let code = e.target.value;
  let country = countryList[code];
  let newSrc = `https://flagsapi.com/${country}/flat/64.png`;
  let flag = e.target.parentElement.querySelector("img");
  flag.src = newSrc;
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount;
  if (amt.value == "" || amt.value <= 0) {
    amount = 1;
    amt.value = 1;
  } else {
    amount = amt.value;
  }
  const URL = `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[to.value.toLowerCase()];
  let finalAmt = rate * amount;
  message.innerText = `${amount}${from.value}=${finalAmt.toFixed(5)}${
    to.value
  }`;
});
