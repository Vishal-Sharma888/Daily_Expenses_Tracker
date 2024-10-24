import React from 'react';
//styles
//styles
import "../Transactions/Transactions.css";
import TopExpenseBody from '../TopExpenseBody/TopExpenseBody';

const TopExpenses = () => {
    return (
        <div className='Transactions'>
            <h2>Top Expenses</h2>
            <TopExpenseBody />
        </div>
    );
};

export default TopExpenses;