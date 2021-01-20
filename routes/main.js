const express = require("express");
const router = require("express").Router();
const path = require("path");
const UserData = require("../models/data");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.post("/", async function (req, res) {
  console.log("i am here!!!!!!!!!!!!!!!!!!");
  // console.log("req.body", req.body);
  const foo = req.body;
  console.log("foo", foo);
  // try {
  //   let {
  //     Age,
  //     Gender,
  //     Family_Diabetes,
  //     highBP,
  //     PhysicallyActive,
  //     Smoking,
  //     Alcohol,
  //     RegularMedicine,
  //     JunkFood,
  //     Stress,
  //     BPLevel,
  //     Prediabetes,
  //     UriationFreq,
  //     Pregnancies,
  //     BMI,
  //     Sleep,
  //     SleepSound,
  //   } = req.body;

  //   if (
  //     !(typeof Family_Diabetes === "boolean") ||
  //     !(typeof highBP === "boolean") ||
  //     !(typeof Alcohol === "boolean") ||
  //     !(typeof RegularMedicine === "boolean") ||
  //     !(typeof Prediabetes === "boolean") ||
  //     !(typeof Smoking === "boolean")
  //   )
  //     return res.status(400).json({ msg: "Must be true or false" });

  //   if (
  //     !Number.isInteger(SleepSound) ||
  //     !Number.isInteger(Sleep) ||
  //     !Number.isInteger(BMI) ||
  //     !Number.isInteger(Pregnancies)
  //   )
  //     return res.status(400).json({ msg: "Must be number" });

  //   if (
  //     !Age ||
  //     !Gender ||
  //     !PhysicallyActive ||
  //     !JunkFood ||
  //     !Stress ||
  //     !BPLevel ||
  //     !UriationFreq
  //   )
  //     return res.status(400).json({ msg: "Not all fields have been entered." });

  //   const newUserData = new UserData({
  //     Age,
  //     Gender,
  //     Family_Diabetes,
  //     highBP,
  //     PhysicallyActive,
  //     Smoking,
  //     Alcohol,
  //     RegularMedicine,
  //     JunkFood,
  //     Stress,
  //     BPLevel,
  //     Prediabetes,
  //     UriationFreq,
  //     Pregnancies,
  //     BMI,
  //     Sleep,
  //     SleepSound,
  //   });
  //   const savedUser = await newUserData.save();
  //   res.json(savedUser);
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }
});

router.get("/get-data", async (req, res) => {
  try {
    const { id } = req.id;

    if (!id) return res.status(400).json({ msg: "Must enter id" });

    const userData = await UserData.findById(id);
    res.json({
      Age: userData.Age,
      Gender: userData.Gender,
      Family_Diabetes: userData.Family_Diabetes,
      highBP: userData.highBP,
      PhysicallyActive: userData.PhysicallyActive,
      Smoking: userData.Smoking,
      Alcohol: userData.Alcohol,
      RegularMedicine: userData.RegularMedicine,
      JunkFood: userData.JunkFood,
      Stress: userData.Stress,
      BPLevel: userData.BPLevel,
      Prediabetes: userData.Prediabetes,
      UriationFreq: userData.UriationFreq,
      Pregnancies: userData.Pregnancies,
      BMI: userData.BMI,
      Sleep: userDat.Sleepa,
      SleepSound: userData.SleepSound,
    });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
