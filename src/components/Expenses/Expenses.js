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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterYearHandler} />
      {props.expenses
        .filter(
          (expense) => expense.date.getFullYear() === Number(filteredYear)
        )
        .map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
    </Card>
  );
};

export default Expenses;
