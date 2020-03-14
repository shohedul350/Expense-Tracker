import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Blance } from './components/Blance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import AppState from '../src/context/AppState';
import {Footer} from './components/Footer'

function App() {
  return (
    <AppState>
     
      <div class="card text-center" style={{width: '30rem',margin:'auto'}}>
      <Header/>
          <Blance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
          <Footer/>
      </div>
    </AppState>
  );
}

export default App;
