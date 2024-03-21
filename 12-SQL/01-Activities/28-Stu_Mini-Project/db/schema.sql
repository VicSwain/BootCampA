DROP DATABASE IF EXISTS movie_db; WITH (FORCE);

CREATE DATABASE movie_db;

\c movie_db;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    movie_name VARCHAR(30)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY, 
    movie_id INTEGER,
    review VARCHAR(100)
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);

SELECT current_database();

