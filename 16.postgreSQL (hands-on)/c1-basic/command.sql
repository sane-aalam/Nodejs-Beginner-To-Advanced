-- \l - list all databases
-- \q - quit
-- \c db
-- _
-- name - connect to database
-- \dt - list all tables
-- \d tb
-- _
-- name - desc a table
-- \d+ tb
-- _
-- name- list all column
-- \! cls.
-- - list all column


-- command-1
-- love postgres(DATABASE)
SELECT datname FROM pg_database;

-- show all pg_database(into)
-- "postgres"
-- "test"
-- "template1"
-- "template0"

-- command-2
-- to create new DATABASE,DROP DATABASE
CREATE DATABASE TEST1;
CREATE DATABASE TEST;
CREATE DATABASE DEVTIDER;
DROP DATABASE TEST1;

-- create table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    role VARCHAR(50),
    salary NUMERIC
);

-- View table
SELECT * FROM employees;

-- Insert data
INSERT INTO employees (name, role, salary) 
VALUES
('John Doe 1', 'Developer', 60000),
('John Doe brother-1', 'Frontend Developer', 10000),
('John Doe brother-2', 'Backend Developer', 15000),
('John Doe brother-3', 'Full-stack Developer', 20000),
('John Doe friend-1', 'UI/UX Designer', 18000),
('Raj Vijay', 'QA Engineer', 12000),
('Raj 1', 'DevOps Engineer', 25000),
('Rohan 1', 'Project Manager', 30000),
('Rahul', 'Data Analyst', 22000),
('Prem', 'System Administrator', 21000);

-- Logic 
SELECT * FROM employees WHERE role = 'Developer' or salary = 10000;
SELECT * FROM employees WHERE role = 'Developer' And salary = 60000;