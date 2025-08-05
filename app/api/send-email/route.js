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
`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f7f7f7; border-radius: 8px;">
      <h2 style="color: #333;">📩 Új üzenet érkezett a portfóliódból</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">Keresztnév:</td>
          <td style="padding: 8px;">${firstname}</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
          <td style="padding: 8px; font-weight: bold;">Vezetéknév:</td>
          <td style="padding: 8px;">${lastname}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">E-mail:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
          <td style="padding: 8px; font-weight: bold;">Telefonszám:</td>
          <td style="padding: 8px;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Szolgáltatás:</td>
          <td style="padding: 8px;">${service}</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
          <td style="padding: 8px; font-weight: bold;">Üzenet:</td>
          <td style="padding: 8px; white-space: pre-line;">${message}</td>
        </tr>
      </table>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        Ez az üzenet automatikusan generálva lett a weboldalad kapcsolatfelvételi űrlapjáról.
      </p>
    </div>
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