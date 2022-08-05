const CaloryData = require("../models/calorydataModel");
const mongoose = require("mongoose");

//GET all calorydatas
const getCaloryDatas = async (req, res) => {
  try {
    const calorydatas = await CaloryData.find().sort({
      createdAt: -1,
    }); //Listing the database in descending order (Newest at the top)
    res.status(200).json(calorydatas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET a calorydata
const getCaloryData = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not a valid MongoDB ID" });
    }
    const calorydata = await CaloryData.findById(id);
    if (!calorydata) {
      return res.status(404).json({ error: "No such calorydata" });
    }
    res.status(200).json(calorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//CREATE a calorydata
const createCaloryData = async (req, res) => {
  const { food, meal, calories } = req.body;
  //Making a more friendly error message, due to omitting mandatory field upon submission of new calorydata
  let emptyFields = [];

  if (!food) {
    emptyFields.push("title");
  }
  if (!meal) {
    emptyFields.push("load");
  }
  if (!calories) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }
  //add doc to db
  try {
    const calorydata = await CaloryData.create({
      food,
      meal,
      calories,
    });
    res.status(200).json(calorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a calorydata
const deleteCaloryData = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not a valid MongoDB ID" });
    }
    const calorydata = await CaloryData.findOneAndDelete({ _id: id });
    if (!calorydata) {
      return res.status(404).json({ error: "No such calorydata" });
    }
    res.status(200).json(calorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE a calorydata
const updateCaloryData = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not a valid MongoDB ID" });
    }
    const calorydata = await CaloryData.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!calorydata) {
      return res.status(404).json({ error: "No such calorydata" });
    }
    res.status(200).json(calorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCaloryData,
  getCaloryDatas,
  getCaloryData,
  deleteCaloryData,
  updateCaloryData,
};
