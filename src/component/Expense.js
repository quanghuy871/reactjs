import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem.js';
import ExpenseFilter from './ExpenseFilter.js';
import Card from '../UI/Card.js';
import './Expense.css';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const dropDownHandler = function(year) {
    setFilteredYear(year);
  };

  const expenseFilter = props.items.filter(el => el.date.getFullYear().toString() === filteredYear);

  return (
      <div>
        <Card className="expense">
          <ExpenseFilter selected={filteredYear} onDropDownHandler={dropDownHandler}/>
          {expenseFilter.map((el) => (<ExpenseItem key={el.id} title={el.title} date={el.date} amount={el.amount}/>))}
        </Card>
      </div>
  );
}

export default Expense;