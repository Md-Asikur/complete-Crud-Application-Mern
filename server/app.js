require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const router=require("./routes/router")
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8003;

 app.use(cors());
 //app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("<h1>server start</h1>");
});
app.listen(port, () => {
  console.log(`Your server listening at http://localhost:${port}`);
});
