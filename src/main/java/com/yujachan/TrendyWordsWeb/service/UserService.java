package com.yujachan.TrendyWordsWeb.service;

import com.yujachan.TrendyWordsWeb.dao.UsersServiceInterface;
import com.yujachan.TrendyWordsWeb.model.Users;
import com.yujachan.TrendyWordsWeb.repository.UsersRepository;
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

    public void saveOrUpdateUsers(Users user) {
        usersRepository.save(user);
    }

    public void deleteUser(String id) {
        usersRepository.delete(id);
    }
}
