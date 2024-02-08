require("dotenv").config();
const express = require("express");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

app.use(bookRouter);

connection();

app.get("/health", (request, response) => {
  res.send("Health");
});

app.listen(5002, () => {
  console.log("listening");
});
