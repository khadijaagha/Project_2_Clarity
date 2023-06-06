const Technique = require('../models/technique');
const User = require('../models/user');

module.exports = 
async function (req, res, next) {
    try {
        console.log(`user is id${ req.user._id }`)
        const requestorId = req.user._id;
        console.log(`requestor id --> ${requestorId}`);
        const techniqueToEdit = await Technique.findById(req.params.id);
        console.log(`technique to edit--> ${techniqueToEdit}`)
        const techniqueOwnerId = techniqueToEdit.user;
        console.log(`technique owner id --> ${techniqueOwnerId}`);

        if (requestorId.equals(techniqueOwnerId)) {
            return next();
        } else {
            res.send('This is not your technique!')
        }
    } catch (err) {
        console.log(`ERROR MESSAGE --> ${err.message}`)
    }
}