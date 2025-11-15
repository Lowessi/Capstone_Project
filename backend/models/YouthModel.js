import mongoose from "mongoose";

const youthSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  age: {
    type: Number,
    min: 0,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  barangay: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Barangay",
  },
});
