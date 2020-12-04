DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

\c airbnb;

CREATE TABLE IF NOT EXISTS lodgeInfo (
    id SERIAL PRIMARY KEY,
    entireLodge BOOLEAN NOT NULL,
    type varchar(255) NOT NULL,
    maxGuests int NOT NULL,
    bedroom int NOT NULL,
    beds int NOT NULL,
    bath int NOT NULL
);

CREATE TABLE IF NOT EXISTS listings (
    id SERIAL PRIMARY KEY,
    hostname varchar(255) NOT NULL,
    hostimg varchar(255) NOT NULL,
    lodgename varchar(255) NOT NULL,
    lodgeInfoId int NOT NULL,
    superhost BOOLEAN NOT NULL,
    enhancedClean BOOLEAN NOT NULL,
    description text,
    desSpace text,
    guestAccess text,
    otherThings text,
    checkIn varchar(4) NOT NULL,
    checkOut varchar(4) NOT NULL,
    selfCheckIn BOOLEAN NOT NULL,
    kidFriendly BOOLEAN NOT NULL,
    infantFriendly BOOLEAN NOT NULL,
    pets BOOLEAN NOT NULL,
    smoking BOOLEAN NOT NULL,
    partiesEvents BOOLEAN NOT NULL,
    additionalRules varchar(500),
    FOREIGN KEY (lodgeInfoId) REFERENCES lodgeInfo(id)
);

