const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'gaalmark.markit@gmail.com', 
        pass: 'jonn usiw poqv vret'
    }
});

const sendEmail = (mailOptions) => {
    return transporter.sendMail(mailOptions)
        .then(info => console.log('Email sent: ' + info.response))
        .catch(error => console.error('Error sending email:', error));
};

module.exports = sendEmail;
