const express = require('express');
const sendemail = new express.Request(); 


sendemail.post("/api/sendemail", (req, res) => {
  console.log(req.body);
})

module.exports = sendemail;