const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
const port = process.env.PORT || 3000;

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/author");
const bookRouter = require("./routes/books");
const mongoose = require("mongoose");
require("dotenv/config");
const uri = process.env.MONGO_URI;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(layouts);
app.use(express.static("public"));
app.use(express.urlencoded({ limit: "10mb", extended: false }));

mongoose.connect(uri);

app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.listen(port, () => {
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to the database..."));
  console.log(`Server listening on port: ${port}...`);
});
