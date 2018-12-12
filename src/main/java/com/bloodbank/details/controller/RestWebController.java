package com.bloodbank.details.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.details.dao.BloodBankDAOImpl;
import com.bloodbank.details.model.Donor;

@RestController
@RequestMapping("/api/bloodbank")
public class RestWebController {
	
	@Autowired
	BloodBankDAOImpl bloodBankDAOImpl;
	
	@PostMapping(value="/donor")
	public String postCustomer(@RequestBody Donor donor){
		
		bloodBankDAOImpl.saveDonorDetails(donor);
		return "Post Successfully!";
	}
}