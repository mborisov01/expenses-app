import React, { useState } from "react";

import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {
  const [year, setYear] = useState("all");
  const expenses = props.expenses;

  const yearFilterValue = (yearVAlue) => {
    setYear(yearVAlue);
  };

  let filteredExpenses = expenses;
  if (year != "all") {
    filteredExpenses = props.expenses.filter(
      (expenses) => expenses.date.getFullYear().toString() === year
    );
  }

  let expenseContent = <p className="expenses__msg">No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          expense={expense.amount}
          date={expense.date}
        />
      );
    })
  }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSaveFilter={yearFilterValue} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
