const pg = require('pg');
const Pool = require('pg').Pool;

const PGUSER = 'alexyi164';
const PGDATABASE = 'airbnb';

let config = {
  host: '34.203.208.189',
  port: '5432',
  user: PGUSER,
  database: PGDATABASE,
  max: 20,
  password: process.env.DBPASSWORD
}

const pool = new Pool(config);

const getAllInfo = (id, callback) => {
  let sqlString = 'SELECT * FROM listings, lodgeInfo WHERE listings.lodgeInfoId = lodgeInfo.id AND listings.id = $1';
  pool.query(sqlString, [id], (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(error, results.rows[0]);
  })
}

module.exports = { getAllInfo }
