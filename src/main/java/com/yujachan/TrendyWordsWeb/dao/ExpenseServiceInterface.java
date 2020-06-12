package com.yujachan.TrendyWordsWeb.dao;

import com.yujachan.TrendyWordsWeb.model.Expense;

import java.util.List;

public interface ExpenseServiceInterface {

    List<Expense> findAll();
    List<Expense> findByMonthAndYear(String month, int year);
    List<Expense> findByYear(int year);
    void saveOrUpdateExpense(Expense expense);
    void deleteExpense(String id);
}
