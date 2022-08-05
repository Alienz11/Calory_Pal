const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const caloryDatasSchema = new Schema(
  {
    food: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    meal: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    calories: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Negative calories aren't real.");
      },
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CaloryData", caloryDatasSchema);
