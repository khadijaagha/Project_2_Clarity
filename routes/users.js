var express = require('express');
var router = express.Router();
const passport = require('passport');
const users = require("../controllers/users");
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// //why are we doing this and why not embedded
// router.get('/users/new', usersCtrl.new);


// router.post('/users', usersCtrl.create);




module.exports = router;