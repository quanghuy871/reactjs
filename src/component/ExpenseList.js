import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import Card from '../UI/Card.js';

const ExpenseList = function(props) {
  const list = props.items.length === 0 ? <h2 className="expenses-list__fallback">There is no item</h2> :
      props.items.map((el) => (<ExpenseItem key={el.id} title={el.title} date={el.date} amount={el.amount}/>));

  return (
      <ul className="expenses-list">
        {list}
      </ul>
  );
};

export default ExpenseList;