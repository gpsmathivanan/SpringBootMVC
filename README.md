# SpringBootMVC
Spring Boot Application with Ajax Call and Database Connection



Database Query Details:


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

Select * from donordetails;

