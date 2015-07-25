DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  objectId INTEGER,
  message TEXT,
  room TEXT,
  username TEXT
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  userId INTEGER,
  username TEXT
);

INSERT INTO messages VALUES (1, 'First Message', 'lobby', 'admin');
INSERT INTO users VALUES (1, 'admin');

-- View the Tables
SELECT * FROM MESSAGES;
SELECT * FROM USERS;
