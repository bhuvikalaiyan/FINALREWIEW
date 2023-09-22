package com.example.Mainproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Mainproject.model.Login;
import com.example.Mainproject.repository.Loginrep;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class Loginser {
	@Autowired
	Loginrep re;
	public Login add(Login d) {
		return re.save(d);
	}
	public List<Login> showdetails(Login d){
		return re.findAll();
	}
	public boolean getsignups(String email,String pass){
		return re.existsByName(email,pass);
	}
	public int dellogin(String email) {
		return re.deletelogin(email);
	}
}
