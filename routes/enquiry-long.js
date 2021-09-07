
const express=require('express') 
const router=express.Router() 
const queryLong = require('../models/enquiry-long')
const nodemailer = require("nodemailer");
const {google} = require('googleapis');

// create transporter object with smtp server details
 
/*-	-----------------------------	------------------		*/

const CLIENT_ID = '892222799177-4sra5aielrb9glpp9q612ifmof5h24qm.apps.googleusercontent.com';
const CLEINT_SECRET = 'Uk3nmH3GMdkm7iwAQ0ggaNS9';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04BJbv24RBmiRCgYIARAAGAQSNwF-L9IrdNUz2lko0zqgfWcGp456Q-jgwSQ90fEJ4HlM-2NHTcbxT9tJ7KXP7puhWLUOh7Lqddg';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
  
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'niraj91k@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
  
      const mailOptions = {
        from: 'niraj91k@gmail.com',
        to: 'info@somanycreamics.com',
        subject: 'Bulk Order Query Details',
        text: 'Hello from Live Server ',
        html: '<h1>Hello from gmail email Live Server</h1>',
      };
  
      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }

router.get('/somya-enquery-order/send_mail', (req, res) => {
	console.log("send mail");
         sendMail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));
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
	/*	--------------------------  ---------------------------------------------------------------------------------------  	*/
async function sendMail_() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
  
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'niraj91k@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
  
      const mailOptions = {
        from: 'shyamraj2906@gmail.com',
        to: 'info@somanycreamics.com',
        subject: 'Bulk Order Query Details',
       // html: 'Hello from Live Server ',
        text: ` Full Name: ${doc.name} \n Email: ${doc.email}\n Mobile: ${doc.mobile}   \n Invest Amount: ${doc.f_name} \n Postal/Zip Code: ${doc.postcode} \n Town/City: ${doc.city} \n Franchise Type: ${doc.franchise_type}  \n State: ${doc.state}  \n SQFT Area: ${doc.sqft_area}  \n Address:${doc.address}  \n  \n Order Note: ${doc.message} \n \n  User ID: ${doc.user_name} \n Password: ${doc.user_pass} `  ,
      };
  
      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }	
	/*	--------------------------  ---------------------------------------------------------------------------------------  	*/	
     sendMail_()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));
	//text: ` Full Name: ${doc.name} \n Email: ${doc.email}\n Mobile: ${doc.mobile}   \n Invest Amount: ${doc.f_name} \n Postal/Zip Code: ${doc.postcode} \n Town/City: ${doc.city} \n Franchise Type: ${doc.franchise_type}  \n State: ${doc.state}  \n SQFT Area: ${doc.sqft_area}  \n Address:${doc.address}  \n  \n Order Note: ${doc.message} \n  \n\n User ID: ${doc.user_name} \n Password: ${doc.user_pass} `  ,
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
