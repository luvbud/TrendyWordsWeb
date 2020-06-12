package com.yujachan.TrendyWordsWeb.api;

import java.util.ArrayList;
import java.util.List;

import com.yujachan.TrendyWordsWeb.dao.ExpenseServiceInterface;
import com.yujachan.TrendyWordsWeb.model.Expense;
import com.yujachan.TrendyWordsWeb.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/trendywords")
public class ExpenseController {

	private final ExpenseServiceInterface expenseServiceInterface;

	@Autowired
	public ExpenseController(ExpenseServiceInterface expenseServiceInterface) {
		this.expenseServiceInterface = expenseServiceInterface;
	}

	@GetMapping
	public ResponseEntity<?> getAll() {
		List<Expense> result = expenseServiceInterface.findAll();
		return new ResponseEntity(result, HttpStatus.OK);
	}
	
	@GetMapping(path = "/{year}/{month}")
	public ResponseEntity<?> getByMonthYear(@PathVariable("year") int year, @PathVariable("month") String month) {
		List<Expense> result = new ArrayList<>();
		if("All".equals(month)) {
			result = expenseServiceInterface.findByYear(year);
		} else {
			result = expenseServiceInterface.findByMonthAndYear(month, year);
		}
		return new ResponseEntity(result, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> addorUpdateExpense(@RequestBody Expense expense) {
		expenseServiceInterface.saveOrUpdateExpense(expense);
		return new ResponseEntity("Expense added succcessfully", HttpStatus.OK);
	}
	
	@DeleteMapping
	public void deleteExpense(@RequestParam("id") String id) {
		expenseServiceInterface.deleteExpense(id);
	}
}
