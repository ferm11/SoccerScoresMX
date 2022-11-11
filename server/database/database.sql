CREATE DATABASE scores;
USE scores;
CREATE TABLE team(
    teamId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    teamName varchar(50),
    logo varchar(255),
    stadiumName varchar(50),
    FoundationAge varchar(20),
    position int(2)
);
CREATE TABLE user(
    userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mail varchar(100),
    username varchar(20),
    pass varchar(20)
);
DESCRIBE user;

DESCRIBE team;