const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./email');

const app = express();

// ✅ Kifejezetten csak a saját domainedet engedélyezi
const corsOptions = {
  origin: 'https://www.gaalmark.hu',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200 // Bizonyos régebbi böngészőkhöz
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Fontos a preflight kérésekhez
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
    .then(() => res.status(200).send('Sikeres e-mail küldés!'))
    .catch((error) => {
      console.error('Oops! Próbálja újra később:', error);
      res.status(500).send(error.toString());
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
