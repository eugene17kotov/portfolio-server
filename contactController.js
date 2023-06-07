const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const customError = require('./error');
const htmlMailTemplate = require('./htmlMailTemplate');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const verifyMail = 'eu.kobets@gmail.com';

const contactController = async (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;
    const mail = {
        to: verifyMail,
        from: verifyMail,
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };

    const mailToSender = {
        to: email,
        from: verifyMail,
        subject: 'Gratitude',
        html: htmlMailTemplate(name),
    };

    try {
        await sgMail.send(mail);
        await sgMail.send(mailToSender);
        res.json({ code: 200, status: 'Message Sent' });
    } catch (error) {
        console.error(error);
        customError({ status: 400, message: 'Bad request' });
    }
};

module.exports = contactController;
