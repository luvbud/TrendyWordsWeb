package com.yujachan.TrendyWordsWeb.repository;

import com.yujachan.TrendyWordsWeb.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface UsersRepository extends MongoRepository<Users, String> {
    Users findByNickname(String nickname);
    Users findByNicknameAndPassword(String nickname, String password);
}
