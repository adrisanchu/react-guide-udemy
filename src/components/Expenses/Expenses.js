import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterYearHandler} />
      {Object.keys(expenses).map((key) => (
        <ExpenseItem
          title={expenses[key].title}
          amount={expenses[key].amount}
          date={expenses[key].date}
          key={expenses[key].id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
