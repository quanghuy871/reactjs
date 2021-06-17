import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

function NewExpense(props) {
  const saveExpense = function(expenseData) {
    const expense = {
      id: Math.random().toString(),
      ...expenseData,
    };

    props.onAddExpense(expense);
  };

  const closeAddExpense = function(title) {
    title !== '' && statefunc(btn);
  };

  const openAddExpense = function() {
    statefunc(<ExpenseForm oncloseExpense={closeAddExpense} onSaveExpense={saveExpense}/>);
  };

  const btn = <button onClick={openAddExpense}>Add New Expense</button>;

  const [state, statefunc] = useState(btn);

  return (
      <div className="new-expense">
        {state}
      </div>
  );
}

export default NewExpense;