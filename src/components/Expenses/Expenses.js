import React, { useState } from 'react';

import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {

  const [year, setYear] = useState("2020")

  const expenses = props.expenses;

  const yearFilterValue = (yearVAlue) => {
    setYear(yearVAlue)
    console.log("expenses js", year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSaveFilter={yearFilterValue} />
        <ExpenseItem
          title={expenses[0].title}
          expenses={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          expenses={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          expenses={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          expenses={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
