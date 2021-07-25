const express=require('express') 
const router=express.Router() 
const riceLndEnq = require('../models/rice-lan-enq')


router.get('/alllndenq', (req, res) => {
    riceLndEnq.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})


router.post('/alllndenqiry', (req, res)=>{
    //check if user exits later
    //hash password
let newUserC = new riceLndEnq({
    fname:req.body.fname,
    lname: req.body.lname,
    phone: req.body.phone,
    email: req.body.email,
    town:req.body.town,
    cstate: req.body.cstate,
    czip: req.body.czip,
    cname: req.body.cname,
    order_note: req.body.order_note
})
//save User
newUserC.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
})



module.exports=router;
