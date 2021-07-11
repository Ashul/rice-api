const express=require('express') 
const router=express.Router() 
const Contact = require('../models/contact-somya')


router.get('/allcontact', (req, res) => {
    Contact.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})


router.post('/contact', (req, res)=>{
    //check if user exits later
    //hash password
let newUserC = new Contact({
    name:req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
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
