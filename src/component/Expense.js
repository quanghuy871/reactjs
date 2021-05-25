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
      <Card className="expense">
        <ExpenseFilter selected={filteredYear} onDropDownHandler={dropDownHandler}/>
        <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}/>
        <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount}/>
        <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount}/>
        <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount}/>
      </Card>
  );
}

export default Expense;