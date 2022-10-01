const mongoose = require("mongoose");

const DB =
  "mongodb+srv://Asikur22:12345@cluster0.n381yhm.mongodb.net/Crud_Final_REact";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
