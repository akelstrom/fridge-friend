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

function email() {
    ejs.renderFile(__dirname + '/test.ejs', function (err, str) {
        if (err) {
            console.log(err);
        } else {
            const mailOptions = {
                from: process.env.GMAIL,
                to: process.env.TEST_MAIL,
                subject: 'Sending Email Using Node.js',
                html: str
            };
            console.log(str);
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

email();