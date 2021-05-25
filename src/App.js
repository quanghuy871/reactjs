import React from 'react';
import Expense from './component/Expense.js';
import NewExpense from './component/NewExpense/NewExpense.js';

function App() {
  const addExpense = function(expenseData) {
    console.log(expenseData);
  };

  const expenses = [
    {
      id: 'e1',
      title: 'A4 Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
      <div>
        <NewExpense onAddExpense={addExpense}/>
        <Expense items={expenses}/>
      </div>
  );
}

export default App;
