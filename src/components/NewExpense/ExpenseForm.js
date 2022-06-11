import React, { useState } from "react";
import "./ExponseForm.css";

const ExponseForm = (props) => {
  const [enteredTitleValue, setEnteredTitleValue] = useState("");
  const [enteredAmountValue, setEnteredAmountValue] = useState("");
  const [enteredDateValue, setEnteredDAteValue] = useState("");
  // const [allChangedEvents, setAllChangedEvents] = useState({
  //   enteredTitleValue: "",
  //   enteredAmountValue: "",
  //   enteredDateValue: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitleValue(event.target.value);
    // setAllChangedEvents({
    //   ...allChangedEvents,
    //   enteredTitleValue: event.target.value,
    // });
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmountValue(event.target.value);
    // setAllChangedEvents({
    //   ...allChangedEvents,
    //   enteredAmountValue: event.target.value,
    // });
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDAteValue(event.target.value);
    // setAllChangedEvents({
    //   ...allChangedEvents,
    //   enteredDateValue: event.target.value,
    // });
    console.log(event.target.value);
  };

  const dataHandler = (event) => {
    // setAllChangedEvents([
    //   enteredTitleValue,
    //   enteredAmountValue,
    //   enteredDateValue,
    // ]);
    // console.log(allChangedEvents);
    event.preventDefault();
    const expenseData = {
      title: enteredTitleValue,
      amount: enteredAmountValue,
      date: new Date(enteredDateValue),
    };
    props.onSaveDate(expenseData);
    setEnteredTitleValue("");
    setEnteredAmountValue("");
    setEnteredDAteValue("");
  };

  return (
    <form onSubmit={dataHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={enteredTitleValue}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmountValue}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDateValue}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExponseForm;
