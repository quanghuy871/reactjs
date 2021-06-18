import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter.js';
import Card from './UI/Card.js';
import './Expense.css';
import ExpenseChart from './ExpenseChart.js';
import ExpenseList from './ExpenseList.js';

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
          <ExpenseChart expenses={expenseFilter}/>
          <ExpenseList items={expenseFilter}/>
        </Card>
      </div>
  );
}

export default Expense;