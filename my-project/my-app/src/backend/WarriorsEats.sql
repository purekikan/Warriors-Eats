CREATE ROLE warriors_eats WITH LOGIN PASSWORD '#d&G/Ya4q+nZ';
ALTER ROLE warriors_eats CREATEDB;

CREATE DATABASE warriors_eats;

-- Exit and reconnect to the database using "psql -d postgres -U warriors_eats" before running commands below.
\c warriors_eats

CREATE TABLE eateries (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  address VARCHAR(30),
  description VARCHAR(255)
);

CREATE TABLE reviews (
  ID SERIAL PRIMARY KEY,
  eatery_name VARCHAR(30),
  food_name VARCHAR(30),
  score INT,
  review_text VARCHAR(1000),
  review_decription VARCHAR(1000),
  image_data BYTEA
);

INSERT INTO eateries (name, address, description)
VALUES ('United College', 'Foo', 'A decent place to eat'), ('St. Jeromes', 'Bar', 'A so so place to eat');
