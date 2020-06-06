package com.yujachan.TrendyWordsWeb.dao;

import com.yujachan.TrendyWordsWeb.model.Users;

import java.util.List;

public interface UsersServiceInterface {
    List<Users> findAll();

    void saveOrUpdateUsers(Users user);

    void deleteUser(String id);
}
