import React from 'react';
import './App.css';
import Reset from './components/Reset';
import CounterGroup from './components/CounterGroup';

function App() {
  let [globalCounterNum, setGlobalCounterNum] = React.useState("");
  let [globalCounterVal, setGlobalCounterVal] = React.useState("");


  function getResetData(countNumber, countVal) {
    console.log("Parent => " + countNumber + " : " + countVal);
    setGlobalCounterNum(countNumber);
    setGlobalCounterVal(countVal);
  }

  function resetGlobals(){
    setGlobalCounterNum("");
    setGlobalCounterVal("");
  }

  return (
    <div className="App">
      <Reset getResetData={getResetData}></Reset>
      <CounterGroup globalCounterNum={globalCounterNum} globalCounterVal={globalCounterVal} resetGlobals={resetGlobals}></CounterGroup>
    </div>
  );
}

export default App;