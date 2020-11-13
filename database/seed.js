const faker = require('faker');
const db = require('./index.js');

const generateRandomBoolean = () => {
  const result = Math.floor(Math.random() * Math.floor(2));
  if (result === 1) {
    return 'false';
  }
  return 'true';
};

const seedData = () => {
  for (let i = 1; i <= 100; i++) {
    const sql = 'INSERT INTO house_rules (check_in, check_out, self_checkIn, kid_friendly, infant_friendly, pets, smoking, parties_events, additional_rules) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      faker.random.number(1),
      faker.random.number(1),
      generateRandomBoolean(),
      generateRandomBoolean(),
      generateRandomBoolean(),
      generateRandomBoolean(),
      generateRandomBoolean(),
      generateRandomBoolean(),
      faker.lorem.sentences(),
    ];
    db.connection.query(sql, values, (err) => {
      if (err) {
        throw err;
      }
    });

    const sql2 = 'INSERT INTO lodge_type (entire_lodge, type, max_guests, bedroom, beds, bath) VALUES ( ?, ?, ?, ?, ?, ?)';
    const values2 = [
      generateRandomBoolean(),
      faker.random.word(),
      faker.random.number({ min: 1, max: 10 }),
      faker.random.number({ min: 0, max: 10 }),
      faker.random.number({ min: 1, max: 10 }),
      faker.random.number({ min: 1, max: 3 }),
    ];
    db.connection.query(sql2, values2, (err) => {
      if (err) {
        throw err;
      }
    });

    const sql3 = 'INSERT INTO listings (hostname, lodgename, lodgetype_id, houserules_id, superhost, enhanced_clean, description, des_space, guest_access, other_things) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values3 = [
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.commerce.productName(),
      i,
      i,
      generateRandomBoolean(),
      generateRandomBoolean(),
      faker.lorem.sentences(),
      faker.lorem.sentences(),
      faker.lorem.sentences(),
      faker.lorem.sentences(),
    ];
    db.connection.query(sql3, values3, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

seedData();
