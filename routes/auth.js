const express = require("express");
const backend = require("../backend/contact");
const router =  express.Router();

router.post("/contact" , backend.con);


module.exports = router;