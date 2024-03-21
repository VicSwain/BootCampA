DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- CONVERT THE FOLLOWING INTO 3RD NORMAL FORM STANDARDIZATION --
CREATE TABLE businesses (
    business_id SERIAL PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER,
    FOREIGN KEY(location_id) REFERENCES locations(location_id)
 );

CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    business_id INTEGER,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);


