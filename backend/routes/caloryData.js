const express = require("express");
const router = express.Router();
const {
  createCaloryData,
  getCaloryDatas,
  getCaloryData,
  deleteCaloryData,
  updateCaloryData,
} = require("../controllers/caloryDataController");


//Get all calory datas
router.get("/", getCaloryDatas);

//Get a single calory data
router.get("/:id", getCaloryData);

//Create a new calory data
router.post("/", createCaloryData);

//Delete a single calory data
router.delete("/:id", deleteCaloryData);

//Update a single calory data
router.patch("/:id", updateCaloryData);

module.exports = router;
