import React, { useState } from "react";

import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSaveFilter={yearFilterValue} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
