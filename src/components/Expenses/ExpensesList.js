import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">found no data.</p>;
  }

  return (
    <div className="expenses-list">
      {props.items.map((elemnt) => (
        <ExpenseItem
          key={elemnt.id}
          title={elemnt.title}
          amount={elemnt.amount}
          date={elemnt.date}
        />
      ))}
    </div>
  );
}

export default ExpensesList;
