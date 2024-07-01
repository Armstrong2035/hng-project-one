function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  document.getElementById(
    "current-time"
  ).textContent = ` Date and Time: ${utcTime}`;
}

setInterval(updateTime, 1000);
updateTime();
