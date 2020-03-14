import React from 'react'
import { Blance } from '../components/Blance';
import { IncomeExpense } from '../components/IncomeExpense';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';

function Home() {
    return (
        <div>
             <Blance/>
          <IncomeExpense/>
          {/* <TransactionList/> */}
          <AddTransaction/>
        </div>
    )
}

export default Home
