import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
      <div className="expense-item">
        <span>{props.date.toISOString()}</span>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <span className="expense-item__price">${props.amout}</span>
        </div>
      </div>
  );
}

export default ExpenseItem;