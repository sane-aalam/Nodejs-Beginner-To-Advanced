
-- Write your PostgreSQL query statement below
SELECT name from Customer
-- referred by any customer with id != 2.
-- not referred by any customer.
-- need learn more postgreSQL(youtube)
where referee_id != 2 or referee_id is null;