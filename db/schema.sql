--Database Creation
CREATE DATABASE astro_db;
USE astro_db;


--Table Creation
CREATE TABLE astro(
  id INT NOT NULL AUTO_INCREMENT,
  born_day VARCHAR(100) NOT NULL,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  email VARCHAR(225) NOT NULL,
  PRIMARY KEY (id)
);

