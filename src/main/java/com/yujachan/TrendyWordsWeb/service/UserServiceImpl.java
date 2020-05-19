package com.yujachan.TrendyWordsWeb.service;

import com.yujachan.TrendyWordsWeb.domain.Users;
import com.yujachan.TrendyWordsWeb.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UsersRepository usersRepository;

    @Override
    public List<Users> findAll() {
        return usersRepository.findAll();
    }

    @Override
    public void saveOrUpdateUsers(Users user) {
        usersRepository.save(user);
    }

    @Override
    public void deleteUser(String id) {
        usersRepository.delete(id);
    }
}