import React,{useContext}from 'react'
import AppContext from '../context/AppContext';
import {numberWithCommas} from '../utils/format'




export const IncomeExpense = () => {
  const { transactions }=useContext(AppContext);

  const amounts = transactions.map(transaction => transaction.amount);

  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return (
       
<div class="row">
<div class="col">
<h4>Income</h4>
          <p className="money plus text-success">BDT {numberWithCommas(income)}</p>
</div>
<div class="col">
<h4>Expense</h4>
    <p  className="money minus text-danger">BDT {numberWithCommas(expense)}</p>
</div>
</div>
    )
}
