import React from 'react';
import './CounterGroup.css';
import Counter from './Counter.js';

function CounterGroup(props) {
  let globalCounterNum = props.globalCounterNum;
  let globalCounterVal = props.globalCounterVal;
  let resetGlobals = props.resetGlobals;

  return (
    <div>
      <h2>Counter Group</h2>
    <div className='counter-group'>
      <Counter number={1} globalCounterNum={globalCounterNum} globalCounterVal={globalCounterVal} resetGlobals={resetGlobals}></Counter>
      <Counter number={2} globalCounterNum={globalCounterNum} globalCounterVal={globalCounterVal} resetGlobals={resetGlobals}></Counter>
      <Counter number={3} globalCounterNum={globalCounterNum} globalCounterVal={globalCounterVal} resetGlobals={resetGlobals}></Counter>
    </div>
    </div>
  )
}

export default CounterGroup;