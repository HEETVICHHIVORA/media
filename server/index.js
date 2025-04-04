const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const nodemailer = require('nodemailer');
const emailTemplate = require('./emailTemplate');
const emailResponse = require('./emailResponse');
app.use(cors({
    origin: "https://mediatryx.com",
    credentials: true
}));

app.use(express.json());
app.listen(PORT, () => {
    console.log(`APP IS RUNNING ON PORT ${PORT}`)
});



const mailsender = async (name,email, title, message,phno) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from: email,
            to: process.env.MAIL_USER,
            subject: title,
            html: emailTemplate(name,email,message,phno),
        });

        if(info){
            await transporter.sendMail({
                from: process.env.MAIL_USER,
                to: email,
                subject: "Thank you for contacting us",
                html: emailResponse(name),
            });
        }

        // console.log(info);
    } catch (e) {
        console.log("In Utils", e.message);
    }
}

app.post('/sendmail', (req, res) => {
    try{
        const {name,email,subject,message,phno} = req.body;
        console.log(name,email,subject,message,phno);
        mailsender(name,email,subject,message,phno);
        res.status(200).json({success:true,message: "Email Sent"});
    }
    catch(e){
        console.log(e);
        res.status(500).json({success:false,message: "Error in sending email"});
    }
})

