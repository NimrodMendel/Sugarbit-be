const express = require("express");
const router = require("express").Router();
const path = require("path");
const UserData = require("../models/data");
const axios = require("axios");
const BASE_URL = "";

// router.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname + "/index.html"));
//   //__dirname : It will resolve to your project folder.
// });

router.post("/", async function (req, res) {
  if (!req.body) {
    res.status(400).send({ message: "Encountered an error with data" });
  }
  const data = req.body;

  try {
    if (
      !(typeof data.Family_Diabetes === "boolean") ||
      !(typeof data.highBP === "boolean") ||
      !(typeof data.Alcohol === "boolean") ||
      !(typeof data.RegularMedicine === "boolean") ||
      !(typeof data.Prediabetes === "boolean") ||
      !(typeof data.Smoking === "boolean")
    )
      return res.status(400).json({ msg: "Must be true or false" });

    if (
      !Number.isInteger(data.SleepSound) ||
      !Number.isInteger(data.Sleep) ||
      !Number.isInteger(data.BMI) ||
      !Number.isInteger(data.Pregnancies)
    )
      return res.status(400).json({ msg: "Must be number" });

    if (
      !data.Age ||
      !data.Gender ||
      !data.PhysicallyActive ||
      !data.JunkFood ||
      !data.Stress ||
      !data.BPLevel ||
      !data.UriationFreq
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });

    // const newUserData = new UserData({
    //   Age,
    //   Gender,
    //   Family_Diabetes,
    //   highBP,
    //   PhysicallyActive,
    //   Smoking,
    //   Alcohol,
    //   RegularMedicine,
    //   JunkFood,
    //   Stress,
    //   BPLevel,
    //   Prediabetes,
    //   UriationFreq,
    //   Pregnancies,
    //   BMI,
    //   Sleep,
    //   SleepSound,
    // });

    // const savedUser = await newUserData.save();
    const probabilityForDiabetes = await getProbabilityForDiabetes(data);

    res.status(200).send({ probabilityForDiabetes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function getProbabilityForDiabetes(data) {
  const probabilityForDiabetes = await axios
    .get(BASE_URL, { params: data })
    .data();

  return probabilityForDiabetes;
}

module.exports = router;
