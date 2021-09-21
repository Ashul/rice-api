const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EnqueryLongSchema = new Schema({
   
    name:{type:String},
    f_name:{type:String},
    email:{type:String},
    mobile:{type:String},

    franchise_type :{type:String},
    sqft_area :{type:String},
    //disctrict:{type:String},
    state :{type:String},
    city :{type:String},
    address :{type:String},
    postcode:{type:String},
    
    message:{type:String},
   
    user_name :{type:String},
    user_pass :{type:String},

    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('FortuneEnquery', EnqueryLongSchema)
