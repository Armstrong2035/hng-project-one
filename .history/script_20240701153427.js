function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  document.getElementById(
    "current-time"
  ).textContent = `Current Time in UTC: ${utcTime}`;
  document.getElementById("current-day").textContent = `Current Day: ${day}`;
}

setInterval(updateTime, 1000);
updateTime();
