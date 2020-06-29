const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: `${process.env.APIKEY}`,
    domain: `${process.env.DOMAIN}`,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, message) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: email,
      to: 'info@phplosangeles.org',
      subject,
      html: message,
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log('I am hit inside mail.js error message!');
        reject(err);
      } else {
        console.log('I am hit inside mail.js with data message!');
        resolve(data);
      }
    });
  });
};

module.exports = sendMail;
