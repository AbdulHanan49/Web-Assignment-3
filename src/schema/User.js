const moongose = require('mongoose');
const Schema = moongose.Schema;

const userProfile = new Schema({
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
});

const userdata = moongose.model('userdata',userProfile);
module.exports = userdata;

