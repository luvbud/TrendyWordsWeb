package com.yujachan.TrendyWordsWeb.repository;

import com.yujachan.TrendyWordsWeb.model.Expense;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrendyWordsRepository extends MongoRepository<Expense, String> {

}
