const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const contactSomyaSchema = new Schema({
    name:{type:String},
    email:{type:String, trim:true, lowercase:true},
    subject: { type: String },
    mobile: { type: String },
    message: { type: String},
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('ContactSomya', contactSomyaSchema)
