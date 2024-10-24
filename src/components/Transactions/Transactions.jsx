import React from 'react';
//styles
import "./Transactions.css";
//components
import TransactionsBody from '../TransactionsBody/TransactionsBody';

const Transactions = () => {
    return (
        <div className='Transactions'>
            <h2>Recently Transactions</h2>
            <TransactionsBody />
        </div>
    );
};

export default Transactions;