import React from 'react';
//styles
import "./AppHead.css"

//components
import Card from '../Card/Card';
import PieChartComp from '../PieChart/PieChart';

const AppHead = props => {
    //props
    const { balance, expenses } = props;
    return (
        <header className='AppHead'>
            <Card text="Wallet balance" value={balance}/>
            <Card text="Expenses" value={expenses}/>
            <PieChartComp />
        </header>
    );
};

export default AppHead;