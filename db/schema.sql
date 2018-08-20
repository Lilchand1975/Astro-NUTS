-- Database Creation
CREATE DATABASE astro_db;
USE astro_db;

-- ID INT NOT NULL AUTO_INCREMENT

CREATE TABLE Users (
  ID int NOT NULL AUTO_INCREMENT,
  born_day VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
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

VALUES ("Monday", "Being born on Monday, you are creative. But, you hardly share it with other. You are calm, soft hearted and anxious. you are very selective in making friends. You can hardly harm other people.", "Travelling, reading books and learning new things", "Your life partner. You are suggested to pair up with thursday born", 5, "You could be Hydrophobic", "Having a creative bend of mind, teaching, academic, artistic and skilled are best suited.You pose good leadership quality and high decision-making ability.", "You could be a Taurus", "Food: Continental, Animal: Lamb, Color: Blue, Music: Country"),

-- TUESDAY
("Tuesday","Being born on Tuesday, you are powerhouse of energy.challenges and hurdles never put you off. Your inborn tendency to rule and lead makes you impulsive but couragious.", "rulling, leading, reading war books and learning new things", "You are suggested to pair up with friday born", "7", "You could be Nyctophobic (fear of darkness)", "Having a couragious bend of mind, rulling, leading, are best suited.You pose good leadership quality and high decision-making ability.", "You could be a Aries", "Food: Continental, Animal: tiger, Color: red, Music: Rock"),

-- WEDNESDAY
("Wednesday", "Being born on Wednesday, you are born with a wise soul possesing wisdom, intelligence, and practicality. you  could have innate telepath ability.", "Making new friends, Travelling, reading books and learning new things.", "you can pair well with Sunday born.", "9", "You could be Pagophobic (Fear of ice)", "Wednesday borns are good communicators, professions such as Salesman, Politics, and Lawyers are best suited.", "You could be a Gemini", "Food: oriental, Animal: fox, Color: yellow, Music: pop"),


-- THURSDAY
("Thursday", "Being born on Thursday,  like affection, love, beauty, partnership, romance, refinement, art, pleasures, luxuries and comforts.", "Teaching, advising,reading books and learning new things are your hobbies", "Your life partner. Choose a monday born.", "3", "You could be Claustrophobic (fear of small space).", "Thursday borns are good communicators, professions such as teachers, Politicians, and Lawyers are best suited.", "You could be a virgo", "Food: oriental, Animal: cow, Color: blue, Music: sentimental."),


-- FRIDAY
("Friday", "Being born on Friday, you like affection, love, beauty, partnership, romance, refinement, art, pleasures, luxuries and comforts. You are rather lazy.", "Singing, Dancing, decorating are your interests.", "You are suggested to pair up with tuesday born", "1", "You could be trypophobic (fear of holes).", "Since your are artistic, dancer, musician or a journalist is suggested.", "You could be a Cancer", "Food: fastfood, Animal: turtle, Color: Gray, Music: Country"),


-- SATURDAY
("Saturday", "Being born on Saturday, You are slow, steady, hardworking and disciplined. You are also intelligent, professional, practical, very strict and straightforward.You are terrible when it comes to time management.", "Trade and business are your interests.", "You are suggested to pair up with sunday born", "8", "You could be acrophobic (fear of heights)", "Since your are business oriented, trade and business is highly suggested.", "You could be a libra.", "Food: spicy, Animal: pig, Color: black, music: jazz"),


-- SUNDAY
("Sunday", "Being born on Sunday, You truly shine in their life like a sun. You are bold, self-centered, proud, noble and confident individual. You are center of attraction.", "playing, watching movies and making new friends are your hobbies.", "You are suggested to pair up with saturday born", "2", "You could be photophobic (fear of lights)", "Any leadership roles will suit you the most.", "You could be a scorpio", "Food: oriental, Animal: swan, Color: white, music: country");



SELECT * FROM astro;