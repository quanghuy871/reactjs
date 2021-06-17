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

  const [state, stateFunc] = useState(false);

  const closeAddExpense = function(title) {
    title !== '' && stateFunc(false);
  };

  const openAddExpense = function() {
    stateFunc(true);
  };

  return (
      <div className="new-expense">
        {!state && <button onClick={openAddExpense}>Add New Expense</button>}
        {state && <ExpenseForm oncloseExpense={closeAddExpense} onSaveExpense={saveExpense}/>}
      </div>
  );
}

export default NewExpense;