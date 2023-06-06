//controls exportage
const Technique = require('../models/technique');
const mongoose = require("mongoose");

module.exports = {
  index,
  show,
  new: newTechnique,
  create,
  delete: deleteTechnique,
  update,
  edit
}


async function edit (req, res, next) {
  try {
    res.render('techniques/edit', {title: 'Edit Technique', } )
  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
    next();
  }
}



async function update (req, res, next) {
  try {
    const { id } = req.params;
    const updatedTechnique = await Technique.findOneAndUpdate(id);
    console.log(updatedTechnique);
    res.redirect(`/techniques/${ id }`);
    
  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
  }
}

async function deleteTechnique(req, res, next) {
  try {
    const { id } = req.params;
    const deletedTech = await Technique.findOneAndRemove(id);
    console.log(deletedTech);
    res.redirect('/techniques');
  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
   
  }
}


async function create (req, res, next) {
  try {
    const bodyYody = { ...req.body };
    bodyYody.user = req.user._id;
    //adding to the database
    const createdTechnique = await Technique.create(bodyYody);
    console.log(createdTechnique);

    //redirects to the newly created technique on the show route 
    res.redirect(`/techniques/${createdTechnique._id}`)
    

  } catch (err) {
   console.log('ERROR MESSAGE -->', err.message); 
   res.render('techniques/new', { title: 'Add Technique', errorMessage: err.message });
  }
}

//GET /techniques/new
async function newTechnique(req, res, next) {
  try {
    res.render('techniques/new', {
      title: 'Create a New Technique',
      errorMessage: ''
    })
  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
  }
}
// //SHOW 

async function show (req, res, next) {
  try {
    const { id } = req.params;
    const technique = await Technique.findById(id).populate('comments.user');
    console.log(technique.comments[0]);
    res.render('techniques/show', {
      technique,
      title: technique.technique
    })
  } catch (err) {
    console.log('ERROR MESSAGE -->', err.message);
    next();
  }
}

//GET /techniques
async function index (req, res, next) {
   const allTechniques = await Technique.find({})
   console.log(allTechniques);

    res.render('techniques/index', {
        title: 'All Techniques',
        techniques: allTechniques
    });
  };
  
