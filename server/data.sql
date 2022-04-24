CREATE DATABASE todolist;

CREATE TABLE tasks(
    unique_id SERIAL PRIMARY KEY,
    task VARCHAR(255)
);