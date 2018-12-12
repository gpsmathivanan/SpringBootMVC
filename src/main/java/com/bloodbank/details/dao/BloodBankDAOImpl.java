package com.bloodbank.details.dao;

import org.springframework.stereotype.Repository;

import com.bloodbank.details.model.Donor;
@Repository
public class BloodBankDAOImpl implements BloodBankDAO {

	@Override
	public String saveDonorDetails(Donor donor) {
		System.out.println("saveDonorDetails");
		System.out.println(donor.getName());
		return "Success";
		
	}

}
