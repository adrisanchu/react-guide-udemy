import './ExpenseItem.css';

function ExpenseItem() {

  const expenseDate = new Date(2021, 2, 26);  // month number starts at 0!
  const expenseTitle = 'Macbook Air';
  const expenseAmount = 1200;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount} €</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
