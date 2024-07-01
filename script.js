function updateTime() {
  const now = new Date();
  const utcTime = now.toISOString().slice(11, 19);
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  document.getElementById("current-time").textContent = ` ${utcTime}`;
  document.getElementById("current-day").textContent = ` ${day}`;
}

setInterval(updateTime, 1000);
updateTime();
