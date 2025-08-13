
CREATE TABLE student_admin_system(
   ID SERIAL,
   FIRSTNAME VARCHAR(50) NOT NULL,
   LASTNAME VARCHAR(50) NOT NULL,
   ROLLNO INTEGER NOT NULL,
   COURSE VARCHAR(150) NOT NULL,
   SUBJECTS VARCHAR(150) NOT NULL,
   SEMSTER INTEGER NOT NULL,
   TOTALFREE DECIMAL(10,2) DEFAULT 70000.00,
   PINCODE INTEGER,
   EMAILID VARCHAR(50) PRIMARY KEY
);


-- insert data 
INSERT INTO student_admin_system
(FIRSTNAME,LASTNAME,ROLLNO,COURSE,SUBJECTS,SEMSTER,TOTALFREE,PINCODE,EMAILID)
VALUES 
('RAJ','SHARMA',1200871,'Btech', 'subject1, subject2,subject3', 4, 5444000.00, 243201,
 'rajsharma@73024'),
('RAhul','SHARMA',1200872,'Btech', 'subject1, subject2,subject3', 4, 5444000.00, 243201,
 'rajsharma@73025'),
('SAJ','SHARMA',1200873,'Btech', 'subject1, subject2,subject3', 4, 344000.00, 243201,
 'rajsharma@73026'),
('Rohon','SHARMA',1200874,'Btech', 'subject1, subject2,subject3', 4, 5444000.00, 243201,
 'rajsharma@73027'),

-- read data with help of condition
select * from student_admin_system;
select * from student_admin_system where rollno = 1200871 and firstname = 'RAJ';
select * from student_admin_system where rollno = 1200871 or lastname = 'Sharma';
select * from student_admin_system where TOTALFREE < 5444000.00;
select * from student_admin_system where id = 1;
select * from student_admin_system where pincode = 243101,
select * from student_admin_system where firstname in('Raj','Rahul'.'Saj');
-- limit query
select * from student_admin_system where limit 3;
-- like query
select * from student_admin_system where firstname like 'R%';
select * from student_admin_system where firstname like '%A';
select * from student_admin_system where lastname like '%a%';


-- insert more for order by

INSERT INTO student_admin_system
(FIRSTNAME,LASTNAME,ROLLNO,COURSE,SUBJECTS,SEMSTER,TOTALFREE,PINCODE,EMAILID)
Values
('CAhul','pal',1200872,'Btech', 'math,complier degisn,dbms', 4, 5444000.00, 243201,
 'rajsharma@730258'),
 ('Sane','Aalam',1200873,'Btech', 'web development, comptur newtworking', 4, 344000.00, 243201,
 'rajsharma@73026191');

-- base on firstname
select * from student_admin_system order by firstname;
-- base on lastname
select * from student_admin_system order by lastname;
-- base on rollno
select * from student_admin_system order by rollno;

-- drop db
drop database student_admin_system;


-- Update and delete query pending to complete curd into DB

-- update 
UPDATE student_admin_system
SET TOTALFREE = 68000.00
WHERE EMAILID = 'rajsharma@730258';


UPDATE student_admin_system
SET COURSE = 'B.Tech AI & Data Science',
    SUBJECTS = 'AI, ML, Data Mining'
WHERE EMAILID = 'rajsharma@730258';


-- delete
DELETE FROM student_admin_system
WHERE EMAILID = 'neha.verma@example.com';