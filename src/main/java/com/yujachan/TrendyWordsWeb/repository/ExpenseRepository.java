package com.yujachan.TrendyWordsWeb.repository;

import java.util.List;

import com.yujachan.TrendyWordsWeb.model.Expense;
import org.springframework.data.mongodb.repository.MongoRepository;

// Mongo Repository
public interface ExpenseRepository extends MongoRepository<Expense, String>{

	List<Expense> findByMonthAndYear(String month, int year);
	
	List<Expense> findByYear(int year);
}
