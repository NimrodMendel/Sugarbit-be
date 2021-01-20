const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

/* Middleware */
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Routes */
app.use("/users", require("./routes/userRouter"));
app.use("/", require("./routes/main"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/routes/notFound/404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
