import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  console.log("ExpensesList", props)
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )).filter((expenseItem) => expenseItem.props.title !== "" && expenseItem.props.amount !== "" && expenseItem.props.date !== NaN)}
    </ul>
  );
};

export default ExpensesList;
