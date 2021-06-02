import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem.js';
import ExpenseFilter from './ExpenseFilter.js';
import Card from '../UI/Card.js';
import './Expense.css';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const dropDownHandler = function(year) {
    setFilteredYear(year);
  };

  return (
      <div>
        <Card className="expense">
          <ExpenseFilter selected={filteredYear} onDropDownHandler={dropDownHandler}/>
          {props.items.map((el) => (<ExpenseItem title={el.title} date={el.date} amount={el.amount}/>))}
        </Card>
      </div>
  );
}

export default Expense;