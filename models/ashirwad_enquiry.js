const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    item_name:{type:String},
    item_weight:{type:String},
    item_qun:{type:String},
    item_amount:{type:String},
    item_rate:{type:String},   
})
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
    
    order_id: {type:String},
    total_amount: {type:String},
    item_paid: {type:Boolean},
    product: [productSchema],

    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('AshirwadEnquery', EnqueryLongSchema)
