const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productIndiaGateSchema = new Schema({
    item_name:{type:String},
    item_weight:{type:String},
    item_qun:{type:String},
    item_amount:{type:String},
    item_rate:{type:String},   
})

const addBillIndiaGateSchema = new Schema({

    full_name:{type:String}, 
    mobile_no: {type:String},
    email_id: {type:String},
    adress: {type:String},
    order_id: {type:String},
    total_amount: {type:String},
    item_paid: {type:Boolean},
    product: [productIndiaGateSchema],
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('AddBillIndiaGate', addBillIndiaGateSchema)
