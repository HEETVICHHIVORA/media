const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const nodemailer = require('nodemailer');
const emailTemplate = require('./emailTemplate');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.listen(PORT, () => {
    console.log(`APP IS RUNNING ON PORT ${PORT}`)
});



const mailsender = async (name,email, title, message) => {
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
            html: emailTemplate(name,email,message),
        });

        // console.log(info);
    } catch (e) {
        console.log("In Utils", e.message);
    }
}

app.post('/sendmail', (req, res) => {
    try{
        const {name,email,subject,message} = req.body;
        mailsender(name,email,subject,message);
        res.status(200).json({success:true,message: "Email Sent"});
    }
    catch(e){
        console.log(e);
        res.status(500).json({success:false,message: "Error in sending email"});
    }
})

