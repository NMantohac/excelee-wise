const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '6689a53cd3b9845a5925f9d740e0cf1f-468bde97-37345687',
    domain: 'sandboxa2ab07cad36e42e890e5a3d0d429d0ac.mailgun.org',
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
        // console.log('I am hit inside mail.js error message!');
        reject(err);
      } else {
        // console.log('I am hit inside mail.js with data message!');
        resolve(data);
      }
    });
  });
};

module.exports = sendMail;
