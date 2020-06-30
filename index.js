require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
