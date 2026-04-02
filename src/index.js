																		const express = require("express");																																																																															
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {																																																													
  res.send("OK");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Dockerized Backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
