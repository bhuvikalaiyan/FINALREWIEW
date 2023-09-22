package com.example.Mainproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.example.Mainproject.model.MainProject;
import com.example.Mainproject.repository.MainProjectRepo;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class MainProjectService {
	@Autowired
    public MainProjectRepo brep;
    //post the data
    public MainProject saveDetails(MainProject b) {
   	 return brep.save(b);
    }
    //get the data
     public List<MainProject> getDetails(){
   	  return brep.findAll();
     }
     //update the data
     public MainProject update(MainProject m) {
    	 return brep.saveAndFlush(m);
     }
     public int updateaccount(int accId,String custName) {
   	  return brep.updateMainProject(accId, custName);
     }
   //delete the data    
	public boolean deleteAccountif(int guestid) {
		if(brep.existsById(guestid)) {
 		   brep.deleteById(guestid);
 		   return true;
 	   }
		return false;
	}
}
