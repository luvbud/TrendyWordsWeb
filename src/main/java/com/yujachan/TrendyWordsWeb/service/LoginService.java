package com.yujachan.TrendyWordsWeb.service;

import com.yujachan.TrendyWordsWeb.dao.LoginServiceInterface;
import com.yujachan.TrendyWordsWeb.model.LogInfo;
import com.yujachan.TrendyWordsWeb.model.Users;
import com.yujachan.TrendyWordsWeb.repository.UsersRepository;
import com.yujachan.TrendyWordsWeb.utility.SHA256Util;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import javax.servlet.http.HttpSession;

@Service
public class LoginService implements LoginServiceInterface {
    private final UsersRepository usersRepository;

    @Autowired
    public LoginService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public ResponseEntity<?> doLogin(HttpSession session, LogInfo logInfo) {
        String userNickname = logInfo.getUserNickname();
        String userPW = logInfo.getUserPassword();

        Users user = usersRepository.findByNickname(userNickname);

        if(user == null){
            return new ResponseEntity("회원가입 하세요", HttpStatus.NOT_FOUND);
        }else{
            String salt = user.getSalt();
            String comparePW = SHA256Util.getEncrypt(userPW, salt);

            if(!user.getPassword().equals(comparePW))
                return new ResponseEntity("일치하는 정보가 없습니다.", HttpStatus.NOT_FOUND);
        }

        JSONObject sessionObject = new JSONObject();
        sessionObject.put("username", userNickname);
        sessionObject.put("name", user.getUsername());

        session.setAttribute("user", sessionObject);

        return new ResponseEntity("로그인 성공입니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> doLogout(HttpSession session, Model model) {
        return new ResponseEntity("로그인 성공입니다.", HttpStatus.OK);
    }

    public JSONObject getLogInfo(HttpSession session) {
        JSONObject logInfo = (JSONObject) session.getAttribute("user");

        return logInfo;
    }
}
