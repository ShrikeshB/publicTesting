const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Load environment variables
const app = express();

// Middleware
app.use(
    cors({
      origin: "*", // Allow all origins
      credentials: true, // Optional: may cause issues with '*'
    })
  );
  

app.use("/", (req, res) => {
  return "hello";
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/greeting", (req, res) => {
  res.status(201).json({ message: "hello sir " });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("\n--------------------------------------");
  console.log(`Server running on port ${PORT}`);
});
