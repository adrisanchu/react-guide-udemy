import { useState } from "react";
import ExpensesList from "./ExpensesList";
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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterYearHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
