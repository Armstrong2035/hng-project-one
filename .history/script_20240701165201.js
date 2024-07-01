function updateTime() {
  const now = new Date();
  const utcTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  document.getElementById("current-time").textContent = ` ${utcTime}`;
  document.getElementById("current-day").textContent = ` ${day}`;
}

setInterval(updateTime, 1000);
updateTime();
