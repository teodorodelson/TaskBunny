package com.taskbunny.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.taskbunny.service.UsersService;
import com.taskbunny.models.Users;

@Controller
@ResponseBody
public class UsersController {
	
	@Autowired
	UsersService us;
	
	@GetMapping("/getusers")
	public List<Users> getAllUsers(){
		return us.findAll();		
	}
	
}
