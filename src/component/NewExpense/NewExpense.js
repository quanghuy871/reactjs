import React from 'react';
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

  return (
      <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpense}/>
      </div>
  );
}

export default NewExpense;