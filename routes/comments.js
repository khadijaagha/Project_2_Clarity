const express = require('express');
const router = express.Router();
const passport = require('passport');
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//POST /techniques/:id/comments
router.post('/techniques/:id/comments', ensureLoggedIn, commentsCtrl.create);


module.exports = router;