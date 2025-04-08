const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Allow all origins
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/greeting", (req, res) => {
  res.status(201).json({ message: "hello sir " });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("\n--------------------------------------");
  console.log(`Server running on port ${PORT}`);
});
