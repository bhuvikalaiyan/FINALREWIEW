package com.example.Mainproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.Mainproject.model.MainProject;



public interface MainProjectRepo  extends JpaRepository<MainProject, Integer>{
	
	@Modifying
	@Query("UPDATE MainProject r SET r.custName = :custName WHERE r.accId = :accId")
	int updateMainProject(@Param("accId") int accId, @Param("custName") String custName);


}
