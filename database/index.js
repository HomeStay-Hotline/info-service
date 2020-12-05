// const pg = require('pg');
// const format = require('pg-format');

// const PGUSER = 'alexyi164';
// const PGDATABASE = 'airbnb';

// let config = {
//   host: 'localhost',
//   user: PGUSER,
//   database: PGDATABASE,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 3000
// }

// let pool = new pg.Pool(config);

// const getAllInfo = (request, response) => {
//   let sqlString = 'SELECT * FROM listings, lodge_type, house_rules WHERE listings.lodgetype_id = lodge_type.id AND listings.houserules_id = house_rules.id AND listings.id = ?';
//   //remember to cancel values to prevent attack. Look at the '?' and check FIELD
//   pool.query(sqlString, (error, results) => {
//     if (error) {
//       console.log(error);
//     }
//     response.status(200).json(results);
//   })
// }

// module.exports = { getAllInfo }

// // let myClient;

// // pool.connect((err, client, done) => {
// //   if (err) {
// //     console.log(err);
// //   }
// //   a
// // })