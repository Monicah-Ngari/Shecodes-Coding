//challenge 1
let currentDayElement = document.querySelector("#current-day");
let currentDate = new Date();
let currentDay = currentDate.getDay();
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDayElement.textContent = daysOfWeek[currentDay];
//challenge 2
function myCity(event) {
  event.preventDefault();
  let favouriteCity = document.querySelectorlector(".search-input");
  let index = document.getElementById(".search-button");
  index.innerHTML = favouriteCity.value;
}
let cityInput = document.querySelector(" .search-input");
cityInput.addEventListener("onclick", myCity);
