package com.yujachan.TrendyWordsWeb.service;

import com.yujachan.TrendyWordsWeb.dao.UsersServiceInterface;
import com.yujachan.TrendyWordsWeb.model.Users;
import com.yujachan.TrendyWordsWeb.repository.UsersRepository;
import com.yujachan.TrendyWordsWeb.utility.SHA256Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UsersServiceInterface {

    private final UsersRepository usersRepository;

    @Autowired
    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    // 전체 검색
    public List<Users> findAll() {
        return usersRepository.findAll();
    }

    // 닉네임 중복검색
    public Users findByNickname(String nickname){
        return usersRepository.findByNickname(nickname);
    }

    public void saveOrUpdateUsers(Users user) {

        // 비밀번호 암호화 후 저장
        String salt = SHA256Util.generateSalt();
        String newPW = SHA256Util.getEncrypt(user.getPassword(), salt);
        user.setPassword(newPW);
        user.setSalt(salt);

        usersRepository.save(user);
    }

    public void deleteUser(String id) {
        usersRepository.delete(id);
    }
}
