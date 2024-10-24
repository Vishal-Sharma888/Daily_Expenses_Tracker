import React from 'react';
//styles
import "./AppBody.css";
import Transactions from '../Transactions/Transactions';
import TopExpenses from '../TopExpenses/TopExpenses';
//components

const AppBody = () => {
    return (
        <div className='AppBody'>
            <Transactions />
            <TopExpenses />
        </div>
    );
};

export default AppBody;