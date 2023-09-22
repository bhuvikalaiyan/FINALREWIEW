package com.example.Mainproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.Mainproject.model.MainProject;
import com.example.Mainproject.service.MainProjectService;

@RestController
@CrossOrigin
public class MainProjectController {
	@Autowired
    public MainProjectService csev;
    @PostMapping("/saveAccount")
    
     public MainProject saveDetails(@RequestBody MainProject c) {
     	return csev.saveDetails(c);
     }
     
     @GetMapping("/getAccount")
    
     public List<MainProject> getDetails(){
     	return csev.getDetails();
     }
     @DeleteMapping("/deleteAccountif/{bid}")
     public ResponseEntity<String> deleteRoom(@PathVariable int bid){
    	 boolean deleted = csev.deleteAccountif(bid);
    	 if(deleted) {
    		 return ResponseEntity.ok(bid+" DELETED");
    	 }
    	 else {
    		 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(bid+" ALREADY DELETED");
    	 }
     }
     @PutMapping("/update/{accId}/{custName}")
     public int  updateaccountnew(@PathVariable int accId, @PathVariable  String custName) {
 
    		return csev.updateaccount(accId, custName);
         
     }
    
     
     @PutMapping("/update")
     public MainProject update(@RequestBody MainProject m) {
    	 return csev.update(m);
     }
}
