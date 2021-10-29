import "./ExpenseDate.css";

const checkDate = (date) => {
  if (!date) return new Date(2021, 9, 29);
  return date;
};

const ExpenseDate = (props) => {
  const checkedDate = checkDate(props.date);
  const month = checkedDate.toLocaleString("en-US", { month: "long" });
  const day = checkedDate.toLocaleString("en-US", { day: "2-digit" });
  const year = checkedDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
