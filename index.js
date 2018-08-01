const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/contact', (req, res) => {
  const trspt = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOpts = {
    from: `${req.body.firstName} ${req.body.lastName} &lt;${
      req.body.email
    }&gt;`,
    to: process.env.GMAIL_USER,
    subject: 'New message from contact form at portfolio',
    text: `${req.body.firstName} ${req.body.lastName} (${
      req.body.email
    }) says: ${req.body.message} (${req.body.phone})`
  };
  trspt.sendMail(mailOpts, error => {
    if (error) {
      console.log(error);
      res.status(400).send('message failed to send');
    } else {
      res.status(201).send('message sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
