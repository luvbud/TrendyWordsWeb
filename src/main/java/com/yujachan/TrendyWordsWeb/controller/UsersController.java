package com.yujachan.TrendyWordsWeb.controller;

import com.yujachan.TrendyWordsWeb.domain.Expense;
import com.yujachan.TrendyWordsWeb.domain.Users;
import com.yujachan.TrendyWordsWeb.service.ExpenseService;
import com.yujachan.TrendyWordsWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity<?> addorUpdateUsers(@RequestBody Users users) {
        userService.saveOrUpdateUsers(users);
        return new ResponseEntity("Users added succcessfully", HttpStatus.OK);
    }
}

