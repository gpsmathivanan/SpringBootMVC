package com.bloodbank.details.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.json.JSONArray;
import org.springframework.stereotype.Repository;

import com.bloodbank.details.model.Admin;
import com.bloodbank.details.model.Donor;
import com.bloodbank.details.model.Seeker;

@Repository
public class BloodBankDAOImpl implements BloodBankDAO {

	@Override
	public String saveDonorDetails(Donor donor) {
		System.out.println("saveDonorDetails");
		try {
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/bloodbank", "root", "mathi");
			Statement stmt = con.createStatement();
			stmt.executeUpdate("INSERT INTO donordetails (name, gender, dateofdonation,phone,homeAddress,bloodType,anydiseases,positiveBlood,allergies)VALUES ("
					+ "'"+donor.getName()+ "'"
					+ ","
					+ "'" +donor.getGender()+ "'"
					+ ","
					+ "'" + donor.getDateofBirth()+ "'"
					+ ","
					+ "'" + donor.getPhone()+ "'"
					+ ","
					+ "'" + donor.getHomeAddress()+ "'"
					+ ","
					+ "'" + donor.getBloodType()+ "'"
					+ ","
					+ "'" + donor.getAnydiseases()+ "'"
					+ ","
					+ "'" + donor.getPositiveBlood()+ "'"
					+ "," 
					+ "'" + donor.getAllergies()+ "')");
			
			System.out.println("Insert Completed DonorDetails");
		} catch (Exception e) {
			System.out.println(e);
		}
		return "Success";

	}

	public String saveSeekerDetails(Seeker seeker) {
		System.out.println("saveSeekerDetails");
		try {
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/bloodbank", "root", "mathi");
			Statement stmt = con.createStatement();
			stmt.executeUpdate("INSERT INTO seekerdetails (name, gender, tillRequiredDate,phone,homeAddress,bloodType)VALUES ("
					+ "'"+seeker.getName()+ "'"
					+ ","
					+ "'" +seeker.getGender()+ "'"
					+ ","
					+ "'" + seeker.getTillRequiredDate()+ "'"
					+ ","
					+ "'" + seeker.getPhone()+ "'"
					+ ","
					+ "'" + seeker.getHomeAddress()+ "'"
					+ ","
					+ "'" + seeker.getBloodType()+ "')");
			
			System.out.println("Insert Completed SeekerDetails");
		} catch (Exception e) {
			System.out.println(e);
		}
		return "Success";

	
		
	}

	public String  saveAdminDetails(Admin admin) {
		System.out.println("saveAdminDetails");
		System.out.println(admin.getBloodType());
		 ArrayList<Donor> donorlist = new ArrayList<Donor>();
		try {
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/bloodbank", "root", "mathi");
			Statement stmt = con.createStatement();
			
			String selectQuery;
			String condtion=admin.getBloodType();
			if(condtion.equalsIgnoreCase("Non-Expired")){
				selectQuery="Select * from donordetails WHERE dateofdonation BETWEEN date_sub(NOW(),interval 42 DAY) AND NOW()";
			}else if(condtion.equalsIgnoreCase("Expired")){
				selectQuery="Select * from donordetails WHERE DATE(dateofdonation) <  CURDATE()- INTERVAL 42 DAY";
			}else{
				selectQuery="Select * from donordetails where bloodType ='"+admin.getBloodType()+"'";
			}
			 ResultSet srs=stmt.executeQuery(selectQuery);
			 while (srs.next()) {
				     Donor donor = new Donor();
				     donor.setName(srs.getString("name"));
				     donor.setGender(srs.getString("gender"));
				     donor.setDateofBirth(srs.getString("dateofdonation"));
				     donor.setPhone(srs.getString("phone"));
				     donor.setHomeAddress(srs.getString("homeAddress"));
				     donor.setBloodType(srs.getString("bloodType"));
				     donor.setAnydiseases(srs.getString("anydiseases"));
				     donor.setPositiveBlood(srs.getString("positiveBlood"));
				     donor.setAllergies(srs.getString("allergies"));
				     donorlist.add(donor);
	            }
			
		} catch (SQLException e) {
			System.out.println(e);
		}
		System.out.println(donorlist);
		 return(new JSONArray(donorlist).toString());
		
	}

}
