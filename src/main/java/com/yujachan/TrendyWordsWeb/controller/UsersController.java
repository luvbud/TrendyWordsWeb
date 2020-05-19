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


//    @GetMapping
//    public ResponseEntity<?> getAll() {
//        List<Expense> result = userService.findAll();
//        return new ResponseEntity(result, HttpStatus.OK);
//    }

//    @GetMapping("/{year}/{month}")
//    public ResponseEntity<?> getByMonthYear(@PathVariable("year") int year, @PathVariable("month") String month) {
//        List<Expense> result = new ArrayList<>();
//        if("All".equals(month)) {
//            result = expenseService.findByYear(year);
//        } else {
//            result = expenseService.findByMonthAndYear(month, year);
//        }
//        return new ResponseEntity(result, HttpStatus.OK);
//    }

    @PostMapping
    public ResponseEntity<?> addorUpdateUsers(@RequestBody Users users) {
        userService.saveOrUpdateUsers(users);
        return new ResponseEntity("Users added succcessfully", HttpStatus.OK);
    }

//    @DeleteMapping
//    public void deleteExpense(@RequestParam("id") String id) {
//        expenseService.deleteExpense(id);
//    }

}

