const express = require('express');
const path = require('path');

// const sendMail = require('./services/mail');

const PORT = process.env.PORT || 3001;

const app = express();

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'public/index.html'));
  });
}

// app.post('/email', (req, res) => {
//   const { formFirstName, formLastName, formEmail, formPhone, formSubject, formMessage } = req.body;
//   const message = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${formFirstName} ${formLastName}</li>
//       <li>Email: ${formEmail}</li>
//       <li>Phone: ${formPhone}</li>
//     </ul>
//     <h3>Subject</h3>
//     <p>${formSubject}</p>
//     <h3>Message</h3>
//     <p>${formMessage}</p>
//     `;

//   console.log('Data: ', req.body);

//   sendMail(formEmail, formSubject, message, (err, data) => {
//     if (err) {
//       console.log('I am hit with an error message!');
//       res.status(500).json({ message: 'Internal Error' });
//     } else {
//       console.log('I am hit with a data message!');
//       res.status(200).json({ message: 'Email Sent', data });
//     }
//   });
// });

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
