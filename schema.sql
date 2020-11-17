DROP DATABASE IF EXISTS airbnbs; 

CREATE DATABASE airbnbs;

USE airbnbs;


CREATE TABLE house_rules (
    id int NOT NULL AUTO_INCREMENT,
    checkIn varchar(4) NOT NULL,
    checkOut varchar(4) NOT NULL,
    selfCheckIn BOOLEAN NOT NULL,
    kidFriendly BOOLEAN NOT NULL,
    infantFriendly BOOLEAN NOT NULL,
    pets BOOLEAN NOT NULL,
    smoking BOOLEAN NOT NULL,
    partiesEvents BOOLEAN NOT NULL,
    additionalRules varchar(500),
    PRIMARY KEY (id)
);

CREATE TABLE lodge_type (
    id int NOT NULL AUTO_INCREMENT,
    entireLodge BOOLEAN NOT NULL,
    type varchar(255) NOT NULL,
    maxGuests int NOT NULL,
    bedroom int NOT NULL,
    beds int NOT NULL,
    bath int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE listings (
    id int NOT NULL AUTO_INCREMENT,
    hostname varchar(255) NOT NULL,
    hostimg varchar(255) NOT NULL,
    lodgename varchar(255) NOT NULL,
    lodgetype_id int NOT NULL,
    houserules_id int NOT NULL, 
    superhost BOOLEAN NOT NULL,
    enhancedClean BOOLEAN NOT NULL,
    description text,
    desSpace text,
    guestAccess text,
    otherThings text,
    FOREIGN KEY (lodgetype_id) REFERENCES lodge_type(id),
    FOREIGN KEY (houserules_id) REFERENCES house_rules(id),
    PRIMARY KEY (id)
);

