package com.yujachan.TrendyWordsWeb.service;

import java.util.List;

import com.yujachan.TrendyWordsWeb.dao.ExpenseServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yujachan.TrendyWordsWeb.model.Expense;
import com.yujachan.TrendyWordsWeb.repository.ExpenseRepository;

@Service
public class ExpenseService implements ExpenseServiceInterface {

	private ExpenseRepository expenseRepository;

	@Autowired
	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}

	public List<Expense> findAll() {
		return expenseRepository.findAll();
	}

	public List<Expense> findByMonthAndYear(String month, int year) {
		return expenseRepository.findByMonthAndYear(month, year);
	}

	public List<Expense> findByYear(int year) {
		return expenseRepository.findByYear(year);
	}

	public void saveOrUpdateExpense(Expense expense) {
		expenseRepository.save(expense);
	}

	public void deleteExpense(String id) {
		expenseRepository.delete(id);
	}
}
