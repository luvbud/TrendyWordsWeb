package com.yujachan.TrendyWordsWeb.repositories;

import com.yujachan.TrendyWordsWeb.domain.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users, String> {

}
//package com.yujachan.trendywords.DbRepository;
//
//        import com.yujachan.trendywords.DbClass.Users;
//        import org.springframework.data.mongodb.repository.MongoRepository;
//
//public interface UsersRepository extends MongoRepository<Users, String> {
//
//}
