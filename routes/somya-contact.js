const express=require('express') 
const router=express.Router() 
const Contact = require('../models/contact-somya')
const nodemailer = require("nodemailer");
const {google} = require('googleapis');
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
/*  ------------------- */

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
    mobile: req.body.mobile,
    subject: req.body.subject,
    message: req.body.message
})

//save User
newUserC.save((err,user) => {
    // user.hash = undefined;
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
        subject: 'Contact page Query Details',
        //html: 'Hello from Live Server ',
       text: ` Full Name: ${user.name} \n Email: ${user.email}\n Mobile: ${user.mobile}   \n Subject: ${user.subject}  \n Message: ${user.message}  `  ,
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
	
      /*--------------------------    */
    
    /*   *************   ----------------------------   ***********************   */
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS',  send_mail: 'Done',data: user })}
})
})



module.exports=router;
