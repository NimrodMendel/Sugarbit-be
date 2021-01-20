const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  Age: {
    type: String,
    required: [true, "Age is required"],
    enum: [" < 40", "40 - 49", "50 - 59", " > 60"],
  },
  Gender: {
    type: String,
    required: [true, "age is required"],
    enum: ["Male", "Female"],
  },
  Family_Diabetes: {
    type: Boolean,
    required: [true, "Family Diabetes history is required"],
  },
  highBP: {
    type: Boolean,
    required: [true, "Blood pressure is required"],
  },
  PhysicallyActive: {
    type: String,
    required: [true, "Physical activity is required"],
    enum: [
      "less than half an hr",
      "more than half an hr",
      "one hr or more",
      "None",
    ],
  },
  Smoking: {
    type: Boolean,
    required: [true, "Smoking history is required"],
  },
  Alcohol: {
    type: Boolean,
    required: [true, "Alcohol history is required"],
  },
  RegularMedicine: {
    type: Boolean,
    required: [true, "Medicine history is required"],
  },
  JunkFood: {
    type: String,
    required: [true, "Junk food history is required"],
    enum: ["occasionally", "often", "very often", "always"],
  },
  Stress: {
    type: String,
    required: [true, "Stress history is required"],
    enum: ["sometimes", "very often", "not at all", "always"],
  },
  BPLevel: {
    type: String,
    required: [true, "Blood pressure is required"],
    enum: ["normal", "high", "low"],
  },
  Prediabetes: {
    type: Boolean,
    required: [true, "Pre-diabetes history is required"],
  },
  UriationFreq: {
    type: String,
    required: [true, "Urination frequency is required"],
    enum: ["not much", "quite often"],
  },
  Pregnancies: {
    type: Number,
    min: 0,
    required: [true, "Pregnancy history is required"],
  },
  BMI: {
    type: Number,
    min: 0,
    required: [true, "BMI is required"],
  },
  Sleep: {
    type: Number,
    min: 0,
    required: [true, "Sleep history is required"],
  },
  SleepSound: {
    type: Number,
    min: 0,
    required: [true, "Sound Sleep history is required"],
  },
});

const UserData = new mongoose.model("userData", userSchema);

module.exports = { UserData };
