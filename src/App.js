import Expenses from "./components/Expenses/Expenses";
import "./index.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const data = [
  { title: "care for sales", amount: "5000", date: new Date(2013, 1, 5) },
  { title: "modern", amount: "6000", date: new Date(2006, 1, 10) },
  { title: "old car", amount: "7000", date: new Date(2012, 1, 15) },
  { title: "newCars", amount: "8000", date: new Date(2022, 1, 20) },
];

function App() {
  const [expense, setExpense] = useState([]);
  const newData = (newExpense) => {
    // console.log(newExpense);
    setExpense([...expense, newExpense]);
    console.log(expense);
  };

  return (
    <div>
      <NewExpense newExpenseValue={newData} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
