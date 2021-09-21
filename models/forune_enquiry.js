const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EnqueryLongSchema = new Schema({
   
    name:{type:String},
    company_name:{type:String},
    email:{type:String},
    mobile:{type:String},
  
    state :{type:String},
    city :{type:String},
    address :{type:String},
    postcode:{type:String},

    order_note:{type:String},
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('FortuneEnquery', EnqueryLongSchema)
