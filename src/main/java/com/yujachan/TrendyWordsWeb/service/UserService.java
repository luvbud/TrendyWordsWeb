package com.yujachan.TrendyWordsWeb.service;

import com.yujachan.TrendyWordsWeb.domain.Users;

import java.util.List;

public interface UserService {
    List<Users> findAll();

    void saveOrUpdateUsers(Users user);

    void deleteUser(String id);
}
