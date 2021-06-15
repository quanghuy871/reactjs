import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleHandler = function(e) {
    setTitle(e.target.value);
  };

  const amountHandler = function(e) {
    setAmount(e.target.value);
  };

  const dateHandler = function(e) {
    setDate(e.target.value);
  };

  const submitHandler = function(e) {
    e.preventDefault();
    const expense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpense(expense);
    setTitle('');
    setAmount('');
    setDate('');
    props.onSaveExpense();
  };


  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleHandler}/>
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={amount} onChange={amountHandler}/>
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={date} onChange={dateHandler}/>
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
}

export default ExpenseForm;