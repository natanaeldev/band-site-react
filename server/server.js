if (process.env.NODE_ENV !== "production") require("dotenv").config();
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const morgan = require("morgan");

app.use(cors("*"));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/api/v1/", (req, res) => {
  return res.send("hello world");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();