
CREATE TABLE STUDENTSADMIN(
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
INSERT INTO STUDENTSADMIN
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
select * from studentsadmin;
select * from studentsadmin where rollno = 1200871 and firstname = 'RAJ';
select * from studentsadmin where rollno = 1200871 or lastname = 'Sharma';
select * from studentsadmin where TOTALFREE < 5444000.00;
select * from studentsadmin where id = 1;
select * from studentsadmin where pincode = 243101,
select * from studentsadmin where firstname in('Raj','Rahul'.'Saj');
-- limit query
select * from studentsadmin where limit 3;
-- like query
select * from studentsadmin where firstname like 'R%';
select * from studentsadmin where firstname like '%A';
select * from studentsadmin where lastname like '%a%';


-- insert more for order by

INSERT INTO STUDENTSADMIN
(FIRSTNAME,LASTNAME,ROLLNO,COURSE,SUBJECTS,SEMSTER,TOTALFREE,PINCODE,EMAILID)
Values
('CAhul','pal',1200872,'Btech', 'math,complier degisn,dbms', 4, 5444000.00, 243201,
 'rajsharma@730258'),
 ('Sane','Aalam',1200873,'Btech', 'web development, comptur newtworking', 4, 344000.00, 243201,
 'rajsharma@73026191');

-- base on firstname
select * from studentsadmin order by firstname;
-- base on lastname
select * from studentsadmin order by lastname;
-- base on rollno
select * from studentsadmin order by rollno;

-- drop db
drop database studentsadmin;