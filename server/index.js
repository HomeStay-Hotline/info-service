const express = require('express');
const morgan = require('morgan');
const db = require('../database');

const app = express();
const port = 3001;

app.use(morgan('dev'));

app.use('/:id', express.static('public'));

app.get('/api/homes/:id/info', (req, res) => {
  db.getAllInfo(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    console.log(req.params.id, 'it is running');
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Message listening at port http://localhost:${port}`);
});
