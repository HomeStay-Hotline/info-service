const fs = require('fs');
const faker = require('faker');
// const db = require('./index.js');
const argv = require('yargs').argv;

const lines = argv.lines || 10000000;
const filename = argv.output || 'listings.csv';
const lodgeFile = argv.output || 'lodgeInfo.csv';
const writeStream = fs.createWriteStream(filename);
const stream = fs.createWriteStream(lodgeFile);

const generateRandomBoolean = () => {
  const result = Math.floor(Math.random() * 2);
  if (result === 1) {
    return false;
  }
  return true;
};

const generateParagraphLength = () => {
  const result = Math.floor(Math.random() * 4);
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

const createLodgeInfo = () => {
  const entireLodge = generateRandomBoolean();
  const type = faker.random.words(1);
  const maxGuests = faker.random.number({min:1, max:9});
  const bedroom = faker.random.number({min:1, max:9});
  const beds = faker.random.number({min:1, max:9});
  const bath = faker.random.number({min:1, max:9});

  return `${entireLodge},${type},${maxGuests},${bedroom},${beds},${bath}\n`
}

const doWriting = (stream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      i--
      let post = createLodgeInfo();
      if (i === 0) {
        stream.write(post, encoding, done);
      } else {
        stream.write(post, encoding);
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      stream.once('drain', writing);
    }
  }
  writing();
}

stream.write('entireLodge,type,maxGuests,bedroom,beds,bath\n', 'utf-8');

doWriting(stream, 'utf-8', () => {
  stream.end()
})

const createListings = () => {
  const hostname = faker.name.firstName();
  const hostimg = 'https://loremflickr.com/240/240/headshot';
  const lodgename = faker.commerce.productName();
  const lodgeInfoId = faker.random.number({min: 1, max: 100});
  const superhost = generateRandomBoolean();
  const enhancedClean = generateRandomBoolean();
  const description = faker.lorem.sentences();
  const desSpace = faker.lorem.sentences();
  const guestAccess = faker.lorem.sentence();
  const otherThings = faker.lorem.sentences();
  const checkIn = faker.random.number(12);
  const checkOut = faker.random.number(12);
  const selfCheckIn = generateRandomBoolean();
  const kidFriendly = generateRandomBoolean();
  const infantFriendly = generateRandomBoolean();
  const pets = generateRandomBoolean();
  const smoking = generateRandomBoolean();
  const partiesEvents = generateRandomBoolean();
  const additionalRules = faker.lorem.sentences();

  return `${hostname},${hostimg},${lodgename},${lodgeInfoId},${superhost},${enhancedClean},${description},${desSpace},${guestAccess},${otherThings},${checkIn},${checkOut},${selfCheckIn},${kidFriendly},${infantFriendly},${pets},${smoking},${partiesEvents},${additionalRules}\n`
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      i--
      let post = createListings();
      if (i === 0) {
        writeStream.write(post, encoding, done);
      } else {
        writeStream.write(post, encoding);
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
}

writeStream.write('hostname,hostimg,lodgename,lodgeInfoId,superhost,enhancedClean,description,desSpace,guestAccess,otherThings,checkIn,checkOut,selfCheckIn,kidFriendly,infantFriendly,pets,smoking,partiesEvents,additionalRules\n', 'utf-8');

startWriting(writeStream, 'utf-8', () => {
  writeStream.end()
})