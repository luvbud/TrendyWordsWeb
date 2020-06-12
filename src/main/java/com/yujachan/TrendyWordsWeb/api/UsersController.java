package com.yujachan.TrendyWordsWeb.api;

import com.yujachan.TrendyWordsWeb.dao.UsersServiceInterface;
import com.yujachan.TrendyWordsWeb.model.Users;
import com.yujachan.TrendyWordsWeb.service.UserService;
import org.apache.catalina.LifecycleState;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UsersController {

    private final UsersServiceInterface userServiceInterface;

    @Autowired
    public UsersController(UsersServiceInterface usersServiceInterface) {
        this.userServiceInterface = usersServiceInterface;
    }

    // User 회원가입
    @PostMapping
    public ResponseEntity<?> addorUpdateUsers(@RequestBody Users users) {
        userServiceInterface.saveOrUpdateUsers(users);
        return new ResponseEntity(users.getUsername(), HttpStatus.OK);
    }

    // User 중복확인
    @PostMapping(path = "{nickname}")
    public boolean isDuplicate(@PathVariable String nickname){
        Users info = userServiceInterface.findByNickname(nickname);
        return info == null;
    }

    @GetMapping("/all")
    public List<Users> getAllUsers(){
        return userServiceInterface.findAll();
    }
}

