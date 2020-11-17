const faker = require('faker');
const db = require('./index.js');

const generateRandomBoolean = () => {
  const result = Math.floor(Math.random() * Math.floor(2));
  if (result === 1) {
    return false;
  }
  return true;
};

const generateParagraphLength = () => {
  const result = Math.floor(Math.random() * Math.floor(5));
  if (result === 0) {
    return faker.lorem.paragraphs();
  }
  if (result === 1) {
    return faker.lorem.paragraph();
  }
  if (result === 2) {
    return faker.lorem.sentences();
  }
  if (result === 3) {
    return faker.lorem.sentence();
  }
  return '';
};

const lodgeType = () => {
  const options = [
    'House',
    'Yurt',
    'Mansion',
    'Apartment',
    'Cabin',
    'Bungalow',
    'Cottage',
    'Treehouse',
    'Condominium',
  ];
  const choice = Math.floor(Math.random() * Math.floor(options.length));
  return options[choice];
};

const seedData = () => {
  for (let i = 1; i <= 100; i++) {
    const sql = 'INSERT INTO house_rules (checkIn, checkOut, selfCheckIn, kidFriendly, infantFriendly, pets, smoking, partiesEvents, additionalRules) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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

    const sql2 = 'INSERT INTO lodge_type (entireLodge, type, maxGuests, bedroom, beds, bath) VALUES ( ?, ?, ?, ?, ?, ?)';
    const values2 = [
      generateRandomBoolean(),
      lodgeType(),
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

    const sql3 = 'INSERT INTO listings (hostname, hostimg, lodgename, lodgetype_id, houserules_id, superhost, enhancedClean, description, desSpace, guestAccess, otherThings) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values3 = [
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      'https://loremflickr.com/320/240/face,human/all',
      faker.commerce.productName(),
      i,
      i,
      generateRandomBoolean(),
      generateRandomBoolean(),
      generateParagraphLength(),
      generateParagraphLength(),
      generateParagraphLength(),
      generateParagraphLength(),
    ];
    db.connection.query(sql3, values3, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

seedData();
