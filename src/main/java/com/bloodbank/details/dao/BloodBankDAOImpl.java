package com.bloodbank.details.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import org.springframework.stereotype.Repository;
import com.bloodbank.details.model.Donor;

@Repository
public class BloodBankDAOImpl implements BloodBankDAO {

	@Override
	public String saveDonorDetails(Donor donor) {
		System.out.println("saveDonorDetails");
		try {
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/bloodbank", "root", "mathi");
			Statement stmt = con.createStatement();
			stmt.executeUpdate("INSERT INTO donordetails (name, gender, dateofBirth,phone,homeAddress,bloodType,anydiseases,positiveBlood,allergies)VALUES ("
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
			
			System.out.println("Insert Completed");
		} catch (Exception e) {
			System.out.println(e);
		}
		return "Success";

	}

}
