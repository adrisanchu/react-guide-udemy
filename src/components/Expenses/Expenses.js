import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  };
  // filter the expenses to render before mapping
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  // dynamic content depending on the length of the contents to display...
  let expensesContent = <p>No expenses found...</p>;

  if (filteredExpenses.length > 0) {
    // re-calculate the content to render
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterYearHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
