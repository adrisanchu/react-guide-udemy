import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // set initial state as "" for the form
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, amountChangeHandler] = useState("");
  // const [enteredDate, dateChangeHandler] = useState("");

  // or, use single state to manage the whole input form
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // store user input
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
