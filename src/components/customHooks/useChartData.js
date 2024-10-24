import React, { useContext, useEffect, useState } from 'react';
//contexts
import { TransactionsContext } from '../../Contexts/AllContexts';

const useChartData = initialData => {
    //context
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    //states
    const [chartData, setChartData] = useState(initialData);
    //everytime transactionData updates
    useEffect(()=> {
        setChartData([
            { name: 'Entertainment', value: 0 },
            { name: 'Food', value: 0 },
            { name: 'Travel', value: 0 },
        ]);
        calculateCategories();
    }, [transactionData])
    //functions
    const calculateCategories = () => {
        let foodTotal = 0, entertainmentTotal = 0, travelTotal = 0;
        transactionData.forEach(item => {
            if(item.category === "food"){
                foodTotal += Number(item.price);
                setChartData(pre=>[pre[0], {name: "Food", value: foodTotal},pre[2]])
            }
            if(item.category === "entertainment"){
                entertainmentTotal += Number(item.price);
                setChartData(pre=>[{name: "Entertainment", value: entertainmentTotal}, pre[1], pre[2]])
            }
            if(item.category === "travel") {
                travelTotal += Number(item.price);
                setChartData(pre=>[pre[0], pre[1], {name: "Travel", value: travelTotal}])
            }
        });
    }

    return chartData;
}


export default useChartData;