import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';   
import PrintMyNames from './PrintMyNames';
import CounterClass from './CounterClass';

function CounterFn() {

  let [count, updateCount] = useState(0);

  const increase = () => {
    updateCount(count + 1)
  }

  const decrease = () => {
    updateCount(count - 1)
  }

  return(
    <div>
      <button onClick={increase}>+</button>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
    </div>
  )
}


ReactDOM.render(<CounterFn></CounterFn>, document.getElementById("root"));




















// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <App></App>
  
// );