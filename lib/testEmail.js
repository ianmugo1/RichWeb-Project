const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Use the Outlook/Office365 SMTP server
  port: 587,                  // Use port 587 for secure connection (STARTTLS)
  secure: false,              // Use STARTTLS (secure connection)
  auth: {
    user: 'ianmugo123@hotmail.com', // Your Outlook email address
    pass: 'rvuikxaytsehcopk',      // Your app password
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

const mailOptions = {
  from: 'ianmugo123@hotmail.com',   // Your email address
  to: 'recipient@example.com',      // The recipient's email address
  subject: 'Test Email from Nodemailer',
  text: 'This is a test email sent from Nodemailer using Outlook SMTP.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending test email:', error);
  } else {
    console.log('Test email sent:', info.response);
  }
});