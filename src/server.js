const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const app = express();

/* Middleware */
app.use(
  cors({
    origin: "http://localhost:3000", //  Need to change once we deploy the app
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Routes */
app.get("/", (req, res) => {
  res.send("Hello world!");
});

/* Listen */
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
