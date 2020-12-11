const pg = require('pg');
const Pool = require('pg').Pool;

const PGUSER = 'alexyi164';
const PGDATABASE = 'airbnb';

let config = {
  host: 'localhost',
  user: PGUSER,
  database: PGDATABASE,
  max: 20,
  password: 'password'
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 3000
}

const pool = new Pool(config);

const getAllInfo = (id, callback) => {
  let sqlString = 'SELECT * FROM listings, lodgeInfo WHERE listings.lodgeInfoId = lodgeInfo.id AND listings.id = $1';
  //remember to cancel values to prevent attack. Look at the '?' and check FIELD
  pool.query(sqlString, [id], (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(error, results.rows[0]);
  })
}

module.exports = { getAllInfo }

// let myClient;

// pool.connect((err, client, done) => {
//   if (err) {
//     console.log(err);
//   }
//   a
// })