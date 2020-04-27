package com.yujachan.trendywords.DbTemplate;

import com.yujachan.trendywords.DbClass.Users;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UsersTemplate {
    private final MongoTemplate mongoTemplate;

    public UsersTemplate(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public void deleteAll() {
        mongoTemplate.dropCollection(Users.class);
    }

    public void save(Users users) {
        mongoTemplate.save(users);
    }

    public List<Users> findAll() {
        return mongoTemplate.findAll(Users.class);
    }
}
