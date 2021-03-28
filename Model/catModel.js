"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: { type: Number, min: [0, "minimum is 0"], max: [10, "max is 10"] },
  gender: { type: String, enum: ["male", "female", "robot"] },
  color: String,
  weight: Number,
});

module.exports = mongoose.model("Cat", catSchema);
