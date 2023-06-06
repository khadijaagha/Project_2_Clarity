const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const techniqueSchema = new mongoose.Schema({
    technique: {type: String, required: true},
    description: {type: String, required: true},
    thoughts: {type: String, required: true},
    image: String,
    user: {
        type: mongoose.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    comments: [commentSchema] 
}, {
    timestamps: true
}) 

//once schema is defined, assign it to the model and export 

module.exports = mongoose.model('Technique', techniqueSchema);


