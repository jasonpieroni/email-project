const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

app.use(express.json())

app.post('/send-email', (req, res) => {
    const { email, subject, text } = req.body;
})

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jasonpieroni@gmail.com',
        password: '12938'
    }
})

const mailOptions = {
    from: 'jasonpieroni@gmail.com',
    to: email,
    subject: subject,
    text: text,

}

// Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent');
    }
  });

app.listen(3001, () => {
    console.log('Server listening on port 3001');
})