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

function sendWelcomeEmail(userEmail) {
    ejs.renderFile(__dirname + '/welcome-email.ejs', function (err, str) {
        if (err) {
            console.log(err);
        } else {
            const mailOptions = {
                from: process.env.GMAIL,
                to: userEmail,
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

/* sendWelcomeEmail();
sendExpiringEmail();
sendExpiredEmail(); */

const currentDate = new Date();
const expirationDate = new Date(2021, 01, 16);
const difference = (expirationDate - currentDate) / (1000*60*60*24);
//const differenceFormatted = difference / ;
console.log(currentDate);
console.log(expirationDate);
console.log(difference);
//console.log(differenceFormatted);
function testEmail() {
    if (difference <= 3 && difference > 0) {
        console.log('Expiring soon!');
    } else if (difference <= 0) {
        console.log('Expired!');
    } else {
        console.log('Food is still fresh!');
    }
};
testEmail();

module.exports = {
    sendWelcomeEmail,
    sendExpiringEmail,
    sendExpiredEmail
};