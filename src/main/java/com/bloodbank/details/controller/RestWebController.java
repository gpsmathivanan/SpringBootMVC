package com.bloodbank.details.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.details.dao.BloodBankDAOImpl;
import com.bloodbank.details.model.Admin;
import com.bloodbank.details.model.Donor;
import com.bloodbank.details.model.Seeker;

@RestController
@RequestMapping("/api/bloodbank")
public class RestWebController {
	
	@Autowired
	BloodBankDAOImpl bloodBankDAOImpl;
	
	@RequestMapping(value="/donor",method=RequestMethod.POST)
	public String saveDonorDetails(@RequestBody Donor donor){
		bloodBankDAOImpl.saveDonorDetails(donor);
		return "Post Successfully!";
	}
	
	@RequestMapping(value="/seeker",method=RequestMethod.POST)
	public String saveSeekerDetails(@RequestBody Seeker seeker){
		bloodBankDAOImpl.saveSeekerDetails(seeker);
		return "Post Successfully!";
	}
	
	
	@RequestMapping(value="/admin",method=RequestMethod.POST)
	public String saveAdminDetails(@RequestBody Admin admin){
		String response=bloodBankDAOImpl.saveAdminDetails(admin);
		return response;
	}
}