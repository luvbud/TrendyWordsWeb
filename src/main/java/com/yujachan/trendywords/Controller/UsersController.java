package com.yujachan.trendywords.Controller;

import com.yujachan.trendywords.DbClass.Users;
import com.yujachan.trendywords.DbTemplate.UsersTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
>>>>>>> 826ac7f42ce2fccd9ec8931254eb13cfe488292b

import java.util.ArrayList;
import java.util.List;

<<<<<<< HEAD
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UsersController {
    @Autowired
    UsersTemplate usersTemplate;
=======
@Controller
public class UsersController {
    @Autowired
    UsersTemplate usersTemplate;

>>>>>>> 826ac7f42ce2fccd9ec8931254eb13cfe488292b
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
