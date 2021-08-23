
const express=require('express') 
const router=express.Router() 
const queryLong = require('../models/enquiry-long')
const nodemailer = require("nodemailer");

// create transporter object with smtp server details
var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:true,
    requireTLS:true,
    //service: 'gmail',
    auth: {
      user: 'niraj91k@gmail.com',
      pass: 'niraj@2022'
    }
});

/*-	-----------------------------	------------------		*/


router.get('/somya-enquery-order/send_mail', (req, res) => {
        var mailOptions = {
                from: 'niraj91k@gmail.com',
                to: 'shyamraj2906@gmail.com',
                subject: 'Sending Email using Node.js',
                text: `Full Name: ${doc.name} \n Email: ${doc.email}\n Mobile: ${doc.mobile}   \n Invest Amount: ${doc.f_name} \n Postal/Zip Code: ${doc.postcode} \n Town/City: ${doc.city} \n Franchise Type: ${doc.franchise_type}  \n  State: ${doc.state}  \n SQFT Area: ${doc.sqft_area}  \n Address:${doc.address}  \n  \n Order Note: ${doc.message} \n User ID: ${doc.user_name} \n Password: ${doc.user_pass} `  ,
              };
            transporter.sendMail(mailOptions, function(error, info){
	    	console.log(info);
		    
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
}) // end 
/*-	-----------------------------	------------------		*/


router.post('/somya-enquery-order', (req, res)=>{
//     let orderbill = new queryLong(req.body)    //save User
//     orderbill.save((err,user) => {        // user.hash = undefined;
//         if(err && !user){
//             res.status(401).json({ message:err });
//         }
//     else{ res.status(200).json({ status: 'SUCCESS', data: user })}
//     })
     let querydata = new queryLong(req.body) 
        queryLong.findOne({mobile:querydata.mobile},function(err,QueryLong1){
        if(QueryLong1) return res.status(400).json({ auth : false, message :"Mobile Number exits"});
        querydata.save((err,doc)=>{
	/*--------------------------    */
            var mailOptions = {
                from: 'niraj91k@gmail.com',
                to: 'shyamraj2906@gmail.com',
                subject: 'Sending Email using Node.js',
                text: `Full Name: ${doc.name} \n Email: ${doc.email}\n Mobile: ${doc.mobile}   \n Invest Amount: ${doc.f_name} \n Postal/Zip Code: ${doc.postcode} \n Town/City: ${doc.city} \n Franchise Type: ${doc.franchise_type}  \n  State: ${doc.state}  \n SQFT Area: ${doc.sqft_area}  \n Address:${doc.address}  \n  \n Order Note: ${doc.message} \n User ID: ${doc.user_name} \n Password: ${doc.user_pass} `  ,
              };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
      /*--------------------------    */
		
            if(err) {console.log(err);  
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc,
	    	login_id:"check"
            });
        });
    });
    
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

/*--------------------------------------------------------------------------------*/
 router.post('/somya-enquery-order/login', (req, res) => {
    queryLong.findOne({user_name:req.body.user_name},function(err,data){
		if(data){
			if(data.user_pass==req.body.user_pass){
				res.send({"Success":"Success!",data: data });
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
 })// end single find by

 module.exports=router;
