const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const infSchema = new Schema(
  {
    description: { type: String, required: true },
    duration: { type: String, required: true },
    date: { type: Date, required: true },
    photo: { type: String, require: false },
  },
  {
    timestamps: true,
  }
);

const Information = mongoose.model("Exercise", informationSchema);

module.exports = Information;