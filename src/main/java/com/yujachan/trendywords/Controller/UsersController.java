package com.yujachan.trendywords.Controller;

import com.yujachan.trendywords.DbClass.Users;
import com.yujachan.trendywords.DbTemplate.UsersTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UsersController {
    @Autowired
    UsersTemplate usersTemplate;
    List<Users> users = new ArrayList<Users>();

    @PostMapping("/")
    public String index(Users user) {
        usersTemplate.save(user);
        return "index";
    }

    @GetMapping("/login")
    public String logIn() {
        return "login";
    }
}
