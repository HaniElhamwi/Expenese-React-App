import React, { useState } from "react";
import "./NewExpense.css";
import ExponseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpenseLabel, setAddExpenseLabel] = useState(2);
  function newExpenseData(newData) {
    const addNewData = {
      ...newData,
      id: Math.random().toString(),
    };
    console.log(addNewData);
    props.newExpenseValue(addNewData);
    setAddExpenseLabel(2);
  }
  function openAddExpenseLabel() {
    setAddExpenseLabel(1);
  }
  function closeExpenseLabel() {
    console.log("hani");
    setAddExpenseLabel(2);
  }

  return (
    <div className="new-expense">
      {addExpenseLabel === 1 && (
        <ExponseForm
          onSaveDate={newExpenseData}
          closeExpenseLabel={closeExpenseLabel}
        />
      )}
      {addExpenseLabel === 2 && (
        <button onClick={openAddExpenseLabel}>Add Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
