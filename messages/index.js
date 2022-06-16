const express = require('express');
const app = express();

const db = [
  {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  },
];

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

app.get('/messages', (req, res) => {
  res.send(db);
});

app.post('/messages', (req, res) => {
  db.push(req.body);
  res.send(db);
});

app.listen(3000);
