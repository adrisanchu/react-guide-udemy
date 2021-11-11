import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {Object.keys(expenses).map( key => (
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
