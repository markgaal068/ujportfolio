const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./email');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { firstname, lastname, email, phone, service, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'gaalmark.markit@gmail.com',
        subject: `Üzenet a portfólióból`,
        text: `Keresztnév: ${firstname}\nVezetéknév: ${lastname}\nE-mail: ${email}\nTelefonszám: ${phone}\nSzolgáltatás: ${service}\nÜzenet:\n${message}`
    };

    sendEmail(mailOptions)
        .then(() => res.status(200).send('Email sent'))
        .catch((error) => {
            console.error('Error sending email:', error);
            res.status(500).send(error.toString());
        });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
