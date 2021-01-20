const express = require("express");
const router = require("express").Router();


router.get("/", async (req, res) => {
    res.json(
      'Home'
    );
  });

module.exports = router;