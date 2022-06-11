import ExpenseIt from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(props.items);
  const filtedExpense = props.items.filter((elemet) => {
    return elemet.date.getFullYear().toString() === filteredYear;
  });
  console.log(filtedExpense);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          filteredYear={filteredYear}
        />
        {/* <h2>Let's get started!</h2> */}

        <ExpensesChart expenses={filtedExpense} />
        {/* {filtedExpense.length === 0 && <p>no expense to show.</p>} */}
        <ExpensesList items={filtedExpense} />
        {/* <ExpenseIt
        
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseIt>
        <ExpenseIt
          title={data[2].title}
          amount={data[2].amount}
          date={data[2].date}
        ></ExpenseIt>
        <ExpenseIt
          title={data[1].title}
          amount={data[1].amount}
          date={data[1].date}
        ></ExpenseIt>
        <ExpenseIt
          title={data[3].title}
          amount={data[3].amount}
          date={data[3].date}
        ></ExpenseIt> */}
      </Card>
    </div>
  );
}
export default Expenses;
