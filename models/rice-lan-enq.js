const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const RiceLandEnq = new Schema({
   
    fname:{type:String},
    lname:{type:String},
    phone:{type:String},
    email:{type:String},

    town :{type:String},
    cstate :{type:String},
    czip:{type:String},
    cname :{type:String},
    order_note :{type:String},


    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('RiceLnEnquery', RiceLandEnq)
