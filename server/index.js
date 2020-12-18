// require('newrelic');
const express = require('express');
// const morgan = require('morgan');
const db = require('../database/index.js')
const app = express();
const port = 3001;

// app.use(morgan('dev'));

app.use('/', express.static('public'));

app.get('/loaderio-e2fdfb4ed88d9cb7ff2c1e3c9267fc7b.txt', (req, res) => {
  res.send('/loaderio-e2fdfb4ed88d9cb7ff2c1e3c9267fc7b');
});

app.use('/:id', express.static('public'));

app.get('/', (req, res) => {
  res.redirect(`localhost:${3001}/3/`);
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
