CREATE DATABASE bloodbank;
USE  bloodbank;

CREATE TABLE donordetails (
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(100) NOT NULL,
   dateofBirth VARCHAR(100) NOT NULL,
   phone VARCHAR(100) NOT NULL,
   homeAddress VARCHAR(100) NOT NULL,
   bloodType VARCHAR(100) NOT NULL,
   anydiseases VARCHAR(100) NOT NULL,
   positiveBlood VARCHAR(100) NOT NULL,
   allergies VARCHAR(100) NOT NULL
);

desc donordetails;




ALTER TABLE donordetails
  ADD row_cre_date DATETIME DEFAULT CURRENT_TIMESTAMP;


ALTER TABLE donordetails CHANGE dateofBirth dateofdonation VARCHAR(100) NOT NULL;


CREATE TABLE seekerdetails (
		name VARCHAR(100) NOT NULL,
		gender VARCHAR(100) NOT NULL,
	   tillRequiredDate VARCHAR(100) NOT NULL,
	   phone VARCHAR(100) NOT NULL,
	   homeAddress VARCHAR(100) NOT NULL,
	   bloodType VARCHAR(100) NOT NULL,
	   row_cre_date DATETIME DEFAULT CURRENT_TIMESTAMP
	);
	
Select * from donordetails;
	
Select * from seekerdetails;
