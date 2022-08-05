const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Linking routes folder and file
const calorydatasRoutes = require("./routes/caloryData");


//Express App created
const app = express();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/calories", calorydatasRoutes);


//Connecting to MongoDB using mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to the DB and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });