import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Üzenet a portfólióból',
    text: `
Keresztnév: ${firstname}
Vezetéknév: ${lastname}
E-mail: ${email}
Telefonszám: ${phone}
Szolgáltatás: ${service}
Üzenet:
${message}
`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return new Response('Sikeres e-mail küldés!', { status: 200 });
  } catch (err) {
    console.error('Failed to send email:', err);
    return new Response('Hiba történt: ' + err.message, { status: 500 });
  }
}