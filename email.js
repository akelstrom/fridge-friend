const nodemailer = require('nodemailer');
const ejs = require('ejs');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PW
    }
});

function sendWelcomeEmail() {
    ejs.renderFile(__dirname + '/welcome-email.ejs', function (err, str) {
        if (err) {
            console.log(err);
        } else {
            const mailOptions = {
                from: process.env.GMAIL,
                to: 'stefaniectinsley@gmail.com, Zihaozhang1@gmail.com, akelstrom@gmail.com',
                subject: 'Welcome to Fridge Friend!',
                html: str
            };
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    });
};

function sendExpiringEmail() {
    ejs.renderFile(__dirname + '/expiring-email.ejs', function (err, str) {
        if (err) {
            console.log(err);
        } else {
            const mailOptions = {
                from: process.env.GMAIL,
                to: 'stefaniectinsley@gmail.com, Zihaozhang1@gmail.com, akelstrom@gmail.com',
                subject: 'Food Items Expiring Soon!',
                html: str
            };
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    });
};

function sendExpiredEmail() {
    ejs.renderFile(__dirname + '/expired-email.ejs', function (err, str) {
        if (err) {
            console.log(err);
        } else {
            const mailOptions = {
                from: process.env.GMAIL,
                to: 'stefaniectinsley@gmail.com, Zihaozhang1@gmail.com, akelstrom@gmail.com',
                subject: 'Food Items Expired!',
                html: str
            };
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    });
};

sendWelcomeEmail();
sendExpiringEmail();
sendExpiredEmail();