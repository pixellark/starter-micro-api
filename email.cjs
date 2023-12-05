const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '01pethum4@gmail.com',
    pass: 'pchniiknwkynpwhp',
  },
});

// Email content
const mailOptions = {
  from: '01pethum4@gmail.com',
  to: '01pethum@gmail.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
