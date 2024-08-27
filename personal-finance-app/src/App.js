import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import Chart from './components/Chart';
import {GlobalProvider} from './context/GlobalState';
import './App.css';

const App = () => {
  return (
      <GlobalProvider>
        <div className="container">
          <Header />
          <Chart />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransactionForm />
        </div>
      </GlobalProvider>
  );
};

export default App;
