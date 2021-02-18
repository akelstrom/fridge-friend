const nodemailer = require('nodemailer');
const ejs = require('ejs');
const { Inventory, User } = require('../models');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PW
    }
});

function sendWelcomeEmail(userEmail, username) {
    ejs.renderFile(__dirname + '/welcome-email.ejs', { username: username }, function(err, str) {
        console.log(username);
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
    Inventory.findAll({
        attributes: ['id', 'item_name', 'expiration_date', 'sent_expiring'],
        include: [
            {
                model: User,
                attributes: ['email', 'username']
            }
        ]
    })
    .then(data => {
        const filteredData = data.map((el) => el.get({ plain: true })).filter(item => {
            const currentDate = new Date();
            const expirationDate = new Date(item.expiration_date);
            const dayDifference = (expirationDate - currentDate) / (1000*60*60*24);
            return dayDifference >0 && dayDifference <= 3 && item.expiration_date && !item.sent_expiring;
        })
        filteredData.forEach(function(item) {
            ejs.renderFile(__dirname + '/expiring-email.ejs', { item: item }, function (err, str) {
                if (err) {
                    console.log(err);
                } else {
                    const mailOptions = {
                        from: process.env.GMAIL,
                        to: item.user.email,
                        subject: item.item_name + ' Expiring Soon!',
                        html: str
                    };
                    transporter.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                            Inventory.update(
                                {
                                    sent_expiring: true
                                },
                                {
                                    where: {
                                        id: item.id
                                    }
                                }
                            )
                            .then(dbInventoryData => {
                                console.log('Inventory Updated!');
                            });
                        }
                    });
                }
            });
        });
    });
};

function sendExpiredEmail() {
    Inventory.findAll({
        attributes: ['id', 'item_name', 'expiration_date', 'sent_expired'],
        include: [
            {
                model: User,
                attributes: ['email', 'username']
            }
        ]
    })
    .then(data => {
        const filteredData = data.map((el) => el.get({ plain: true })).filter(item => {
            const currentDate = new Date();
            const expirationDate = new Date(item.expiration_date);
            const dayDifference = (expirationDate - currentDate) / (1000*60*60*24);
            return dayDifference <=0 && item.expiration_date && !item.sent_expired;
        })
        filteredData.forEach(function(item) {
            ejs.renderFile(__dirname + '/expired-email.ejs', { item: item }, function (err, str) {
                if (err) {
                    console.log(err);
                } else {
                    const mailOptions = {
                        from: process.env.GMAIL,
                        to: item.user.email,
                        subject: item.item_name + ' Expired!',
                        html: str
                    };
                    transporter.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                            Inventory.update(
                                {
                                    sent_expired: true
                                },
                                {
                                    where: {
                                        id: item.id
                                    }
                                }
                            )
                            .then(dbInventoryData => {
                                console.log('Inventory Updated!');
                            });
                        }
                    });
                }
            });
        });
    });
};

module.exports = {
    sendWelcomeEmail,
    sendExpiringEmail,
    sendExpiredEmail
};