import '../../css/pages/countdown.scss';

function getParam(param, defaultValue) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || defaultValue;
}

const targetDateStr = getParam("date", "2026-12-25");
const eventTitle = decodeURIComponent(getParam("title", "My Event"));
const bgColor = "#" + getParam("bg", "ffffff");
const textColor = "#" + getParam("color", "000000");

document.body.style.backgroundColor = bgColor;
document.body.style.color = textColor;
document.getElementById("eventTitle").textContent = eventTitle;

const targetDate = new Date(targetDateStr + " 00:00:00").getTime();

const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML = "The event has arrived!";
    return;
  }

  const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  monthsEl.textContent = String(months).padStart(2, "0");
  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
