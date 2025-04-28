require('dotenv').config(); // Load .env first
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve frontend

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // from .env
    pass: process.env.GMAIL_PASS  // from .env
  }
});

// Endpoint to handle query submissions
app.post('/send-query', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: 'New Query from Portfolio',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending message.');
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send('Query sent successfully!');
    }
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
