const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hrsea13heo',
  database: 'airbnbs',
});

const getAllInfo = function (id, callback) {
  const sql = 'SELECT * FROM listings, lodge_type, house_rules WHERE listings.lodgetype_id = lodge_type.id AND listings.houserules_id = house_rules.id AND listings.id = ?';
  const field = [id];
  connection.query(sql, field, (err, results) => {
    if (err) {
      return callback(err);
    }
    return callback(null, results);
  });
};

module.exports = {
  getAllInfo,
  connection,
};