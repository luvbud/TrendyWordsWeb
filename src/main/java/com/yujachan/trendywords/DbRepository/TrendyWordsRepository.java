package com.yujachan.trendywords.DbRepository;

import com.yujachan.trendywords.DbClass.TrendyWords;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TrendyWordsRepository extends MongoRepository<TrendyWords, String> {
    @Query("{'word' : ?0}")
    TrendyWords findByName(String name);

    @Query(value="{'group' : ?0}")
    List<TrendyWords> findByGroup(String group);
}
