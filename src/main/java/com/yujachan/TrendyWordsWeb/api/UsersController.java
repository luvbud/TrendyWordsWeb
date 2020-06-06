package com.yujachan.TrendyWordsWeb.api;

import com.yujachan.TrendyWordsWeb.model.Users;
import com.yujachan.TrendyWordsWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UsersController {

    private final UserService userService;

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> addorUpdateUsers(@RequestBody Users users) {
        userService.saveOrUpdateUsers(users);
        return new ResponseEntity("Users added succcessfully", HttpStatus.OK);
    }
}

