import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>26 Marzo 2021</div>
      <div className="expense-item__description">
        <h2>Macbook Air</h2>
        <div className="expense-item__price">1200€</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
