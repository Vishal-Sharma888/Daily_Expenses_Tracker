import { useEffect, useRef, useState } from 'react'
//styles
import './App.css';
//components
import Navbar from './components/Navbar/Navbar'
import AppHead from './components/AppHead/AppHead'
import AppBody from './components/AppBody/AppBody';
//contexts
import { TransactionsContext, MoneyContext } from "./Contexts/AllContexts"
//variables
import { dummyData } from './dummyTransactions';

function App() {
  const [money, setMoney] = useState({
    balance: 0,
    expenses: 0,
  })
  const [transactionData, setTransactionData] = useState(dummyData);
  const initialRender = useRef(true);

  useEffect(()=>{
    if(initialRender.current)  onLoad();

    return(() => {
      initialRender.current = false;
    })
  }, [])

  useEffect(()=> {
    //save data to local storage and if it is initial render skip saving
    if(!initialRender.current) localStorage.setItem("allData", JSON.stringify({money, transactionData}));
  }, [money, transactionData])

  //functions
  const onLoad = () => {
    //load data from local storage if present
    const localData = localStorage.getItem("allData");
    if(localData){
      const {money, transactionData} = JSON.parse(localData);
      setMoney(money);
      setTransactionData(transactionData);
    }
  }
  

  return (
    <main className='App'>
      <MoneyContext.Provider value={[money, setMoney]}>
      <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
        <Navbar />
        <AppHead balance={money.balance} expenses={money.expenses}/>
        <AppBody transactionData={transactionData}/>
      </TransactionsContext.Provider> 
      </MoneyContext.Provider>
    </main>
  )
}

export default App
