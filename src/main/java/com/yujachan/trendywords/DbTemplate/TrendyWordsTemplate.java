package com.yujachan.trendywords.DbTemplate;

import com.yujachan.trendywords.DbClass.TrendyWords;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TrendyWordsTemplate {
    private final MongoTemplate mongoTemplate;

    public TrendyWordsTemplate(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public void deleteAll() {
        mongoTemplate.dropCollection(TrendyWords.class);
    }

    public void save(TrendyWords trendywords) {
        mongoTemplate.save(trendywords);
    }

    public List<TrendyWords> findAll() {
        return mongoTemplate.findAll(TrendyWords.class);
    }
}
