import "./ExpenseItem.css";
import ExpenseDate from "./ExprenseDate";
import Card from "../UI/Card.js";
import { useState } from "react";

function ExpenseItem(prop) {
  const [title, setTitle] = useState(prop.title);
  const clickHandler = () => {};

  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${prop.amount}</div>
      </div>

      <button onClick={clickHandler}>click me </button>
    </Card>
  );
}
export default ExpenseItem;
