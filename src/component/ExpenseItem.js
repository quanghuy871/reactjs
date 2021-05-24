import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const onChange = function() {
    setTitle('Updated');
  };

  return (
      <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <span className="expense-item__price">${props.amount}</span>
          <button onClick={onChange}>CLick me</button>
        </div>
      </div>
  );
}

export default ExpenseItem;