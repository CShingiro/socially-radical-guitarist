const express = require('express');
const app = express();

const db = require('./db.json');

app.use(express.json());

app.get('/messages', (req, res) => {
  res.send(db);
});

app.post('/messages', (req, res) => {
  db.push(req.body);
  res.send(db);
});

app.listen(3000);
