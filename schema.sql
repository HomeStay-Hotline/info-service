DROP DATABASE IF EXISTS airbnbs; 

CREATE DATABASE airbnbs;

USE airbnbs;


CREATE TABLE house_rules (
    id int NOT NULL AUTO_INCREMENT,
    check_in varchar(4) NOT NULL,
    check_out varchar(4) NOT NULL,
    self_checkIn ENUM('true', 'false') NOT NULL,
    kid_friendly ENUM('true', 'false') NOT NULL,
    infant_friendly ENUM('true', 'false') NOT NULL,
    pets ENUM('true', 'false') NOT NULL,
    smoking ENUM('true', 'false') NOT NULL,
    parties_events ENUM('true', 'false') NOT NULL,
    additional_rules varchar(500),
    PRIMARY KEY (id)
);

CREATE TABLE lodge_type (
    id int NOT NULL AUTO_INCREMENT,
    entire_lodge ENUM('true', 'false') NOT NULL,
    type varchar(255) NOT NULL,
    max_guests int NOT NULL,
    bedroom int NOT NULL,
    beds int NOT NULL,
    bath int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE listings (
    id int NOT NULL AUTO_INCREMENT,
    hostname varchar(255) NOT NULL,
    lodgename varchar(255) NOT NULL,
    lodgetype_id int NOT NULL,
    houserules_id int NOT NULL, 
    superhost ENUM('true', 'false') NOT NULL,
    enhanced_clean ENUM('true', 'false') NOT NULL,
    description text,
    des_space text,
    guest_access text,
    other_things text,
    FOREIGN KEY (lodgetype_id) REFERENCES lodge_type(id),
    FOREIGN KEY (houserules_id) REFERENCES house_rules(id),
    PRIMARY KEY (id)
);

