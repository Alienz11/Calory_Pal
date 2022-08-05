const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Express App created
const app = express();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//listen for request
app.listen(process.env.PORT, () => {
  console.log("Connected listening on port", process.env.PORT);
});
