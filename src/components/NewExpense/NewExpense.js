import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const editingForm = () => {
    setEditing(true);
  };

  const editingFormClose = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={editingForm}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onChangeEditingState={editingFormClose}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
