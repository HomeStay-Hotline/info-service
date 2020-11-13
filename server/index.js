const express = require('express');
const app = express();
const port = 3000;
const db = require('../database');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello from server');
});

app.get('/api/homes/:id/info', (req, res) => {
  db.getAllInfo(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Message listening at port http://localhost:${port}`);
});