let currentDate = new Date();

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfWeek = daysOfWeek[currentDate.getDay()];
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;
let formattedDateTime = `${dayOfWeek} ${hours}:${minutes}`;
document.querySelector(".current-day").innerHTML = formattedDateTime;

let inputBtn = document.querySelector(".search-button");
let inputEl = document.querySelector(".search-input");
let city = document.querySelector(".current-city");

function updateCity(event) {
  event.preventDefault();
  city.innerHTML = inputEl.value;
}

inputBtn.addEventListener("click", updateCity);
