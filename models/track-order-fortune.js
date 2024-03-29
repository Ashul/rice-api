const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const trackOrderFortuneSchema = new Schema({
    mobile:{type:String},
    ordered_date: {type:String},
    ordered_text: {type:String},
    ordered_status: {type:Boolean},

    packed_date: {type:String},
    paccked_text: {type:String},
    packed_status: {type:Boolean},

    shipped_date: {type:String},
    shipped_text: {type:String},
    shipped_status:{type:Boolean},

    cancelled_date: {type:String},
    cancelled_text: {type:String},
    cancelled_status: {type:Boolean},

    user_name: {type:String},
    track_id: {type:String},
    user_adress: {type:String},
    currier_name: {type:String},
    dilvery_date: {type:String},

    prod_status: {type:String},
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('TrackOrderFortune', trackOrderFortuneSchema)
