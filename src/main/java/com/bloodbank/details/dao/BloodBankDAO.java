package com.bloodbank.details.dao;

import com.bloodbank.details.model.Admin;
import com.bloodbank.details.model.Donor;
import com.bloodbank.details.model.Seeker;

public interface BloodBankDAO {
	
	public String saveDonorDetails(Donor donor);
	public String saveSeekerDetails(Seeker seeker);
	public String saveAdminDetails(Admin admin);
	
}
