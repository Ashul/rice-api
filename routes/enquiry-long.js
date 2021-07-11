
const express=require('express') 
const router=express.Router() 
const queryLong = require('../models/enquiry-long')

router.post('/somya-enquery-order', (req, res)=>{
    let orderbill = new queryLong(req.body)    //save User
    orderbill.save((err,user) => {        // user.hash = undefined;
        if(err && !user){
            res.status(401).json({ message:err });
        }
    else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end

// all 
router.get('/somya-enquery-order/all', (req, res) => {
    queryLong.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end 
//API to get user by ID
router.get('/somya-enquery-order/:id', (req, res) => {
    // console.log(req.body)
    queryLong.findOne({
        mobile: req.params.id
     }, (err, user)=>{
         if(err && !user){
             res.status(401).json({ message:err });
         }
        else{ res.status(200).json({ status: 'SUCCESS', data: user })}
     })
 })// end single find by


 module.exports=router;
