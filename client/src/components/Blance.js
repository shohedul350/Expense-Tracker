import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import {numberWithCommas} from '../utils/format'

export const Blance = () => {
    const { transactions }=useContext(AppContext);
    

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="">
        <h4><u>Your Balance</u></h4> 
              <h1>BDT {numberWithCommas(total)}</h1>
        </div>
    )
}
