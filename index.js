const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  console.log("🔔 Ping received from service 2");
  res.send("Pong from service 1!");
});

setInterval(() => {
  axios.get("https://SERVICE2-URL-HERE/ping")
    .then(() => console.log("✅ Pinged service 2"))
    .catch((err) => console.error("❌ Failed to ping service 2:", err.message));
}, 120000); // Every 2 minutes

app.listen(PORT, () => {
  console.log(`🚀 Service 1 running on port ${PORT}`);
});
