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

  const closeExpense = function() {
    statefunc(<button onClick={openAddExpense}>Add New Expense</button>);
  };

  const openAddExpense = function() {
    statefunc(<ExpenseForm oncloseExpense={closeExpense} onSaveExpense={saveExpense}/>);
  };

  const [state, statefunc] = useState(<button onClick={openAddExpense}>Add New Expense</button>);

  return (
      <div className="new-expense">
        {state}
      </div>
  );
}

export default NewExpense;