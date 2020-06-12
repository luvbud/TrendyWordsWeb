package com.yujachan.TrendyWordsWeb.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.yujachan.TrendyWordsWeb.dao.LoginServiceInterface;
import com.yujachan.TrendyWordsWeb.dao.UsersServiceInterface;
import com.yujachan.TrendyWordsWeb.model.LogInfo;
import com.yujachan.TrendyWordsWeb.model.Users;
import com.yujachan.TrendyWordsWeb.utility.SHA256Util;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
public class LoginController {

    private LogInfo sessionInfo;
    private final LoginServiceInterface loginServiceInterface;

    @Autowired
    public LoginController(LoginServiceInterface loginServiceInterface) {
        this.loginServiceInterface = loginServiceInterface;
    }

    // 로그인
    @PostMapping
    public ResponseEntity<?> doLogin(HttpSession session, @RequestBody LogInfo logInfo){
        return loginServiceInterface.doLogin(session, logInfo);
    }

    @GetMapping("/getInfo")
    public JSONObject getSessionInfo(HttpSession session){
        JSONObject result = loginServiceInterface.getLogInfo(session);

        if(result == null){
            result = new JSONObject();
            result.put("result", "No values");
        }

        return result;
    }
}
