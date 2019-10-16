var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("./landing/index");
});
router.get("/team", function(req, res){
    res.render("./landing/team");
});

module.exports = router;