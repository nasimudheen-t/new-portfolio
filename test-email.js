import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS ? "Set" : "Not Set");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `Test Contact Form Submission`,
  text: `This is a test message.`,
};

transporter.sendMail(mailOptions)
  .then(info => console.log('Email sent:', info.response))
  .catch(err => console.error('Error sending email:', err));
