const express = require('express');
const router = express.Router();
const passport = require('passport');
const techniques = require("../controllers/techniques");
const ensureLoggedIn = require("../config/ensureLoggedIn");
const ensureOwner = require('../config/ensureOwner');

//import controllers
const techniquesCtrl = require('../controllers/techniques');
/* GET users listing. */

//GET /techniques
router.get('/', ensureLoggedIn, techniquesCtrl.index);

//SHOW /techniques/id
router.get('/:id', ensureLoggedIn, techniquesCtrl.show);

//!NEW //GET /techniques/new
router.get('/new', techniquesCtrl.new);

//POST /techniques
router.post('/', techniquesCtrl.create);

//DELETE /posts/:id
router.delete('/:id', ensureLoggedIn, ensureOwner, techniquesCtrl.delete);
module.exports = router;

//PUT /techniques/:id 
router.put('/:id', techniquesCtrl.update);

//GET /techniques/:id/edit 
router.get('/:id/edit', ensureLoggedIn, ensureOwner, techniquesCtrl.edit);

module.exports = router;