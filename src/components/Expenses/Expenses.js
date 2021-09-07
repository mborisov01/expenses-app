import React, { useState } from "react";

import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {
  console.log("Expenses", props)
  const [year, setYear] = useState("2020");
  const expenses = props.expenses;

  const yearFilterValue = (yearVAlue) => {
    setYear(yearVAlue);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSaveFilter={yearFilterValue} />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              expense={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
