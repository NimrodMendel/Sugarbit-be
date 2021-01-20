const express = require("express");
const router = require("express").Router();
const path = require('path');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
module.exports = router;