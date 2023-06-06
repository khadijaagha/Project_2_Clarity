//controls exportage
const Technique = require('../models/technique');
// const mongoose = require("mongoose");
// const techniques = require('./techniques');

module.exports = {
    create
}


async function create(req, res) {
    const { id } = req.params;
    try {
        //? adding user field to comment
        
        req.body.user = req.user._id 
        console.log(req.body);

        const technique = await Technique.findById(id);
        technique.comments.push(req.body);
        await technique.save();
        res.redirect(`/techniques/${id}`)

    } catch (err) {
        console.log('ERROR MESSAGE -->', err.message)   
    }
}