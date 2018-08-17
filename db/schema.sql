-- Database Creation
CREATE DATABASE astro_db;
USE astro_db;

-- Table Creation
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  born_day VARCHAR(100) NOT NULL,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  email VARCHAR(225) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE astro (
  day_of_the_week VARCHAR (255) NOT NULL,
  personality TEXT(255) NOT NULL,
  hobbies TEXT(255) NOT NULL,
  life_partner TEXT (255) NOT NULL,
  lucky_number TEXT (9) NOT NULL,
  phobia TEXT(255) NOT NULL,
  profession TEXT (255) NOT NULL,
  zodiac_sign TEXT (255) NOT NULL,
  favorites TEXT (255) NOT NULL
);

INSERT INTO astro (day_of_the_week, personality, hobbies, life_partner, lucky_number, phobia, profession, zodiac_sign, favorites)

-- MONDAY

VALUES ("Monday", "Being born on Monday, you are creative. But, you hardly share it with other. You are calm, soft hearted and anxious. you are very selective in making friends. You can hardly harm other people.", "Travelling, reading books and learning new things", "Your life partner", 5, "You could be Hydrophobic", "Having a creative bend of mind, teaching, academic, artistic and skilled are best suited.You pose good leadership quality and high decision-making ability.", "You could be a Taurus", "Food: Continental, Animal: Lamb, Color: Blue, Music: Country"),

-- TUESDAY
("Tuesday","Your personality ...", "Your hobbies", "Your life partner", "Your lucky number", "Your Phobia", "Your profession", "Your Zodiac sign", "Your favorites"),

-- WEDNESDAY
("Wednesday", "Your personality ...", "Your hobbies", "Your life partner", "Your lucky number", "Your Phobia", "Your profession", "Your Zodiac sign", "Your favorites"),

-- THURSDAY
("Thursday", "Your personality ...", "Your hobbies", "Your life partner", "Your lucky number", "Your Phobia", "Your profession", "Your Zodiac sign", "Your favorites"),

-- FRIDAY
("Friday", "Your personality ...", "Your hobbies", "Your life partner", "Your lucky number", "Your Phobia", "Your profession", "Your Zodiac sign", "Your favorites"),

-- SATURDAY
("Saturday", "Your personality ...", "Your hobbies", "Your life partner", "Your lucky number", "Your Phobia", "Your profession", "Your Zodiac sign", "Your favorites"),

-- SUNDAY
("Sunday", "Your personality ...", "Your hobbies", "Your life partner", "Your lucky number", "Your Phobia", "Your profession", "Your Zodiac sign", "Your favorites");

SELECT * FROM astro;