import React, { useState } from 'react'

function Counter(){
  // its wrong because i am using curly braces insted of this []

  const [count, setCount] = useState(0);

  const increase = () => {
    // let count = count + 1;
    setCount(count + 1);
  }

  const decrease = () => {
    // let count = count - 1;
    setCount(count - 1);
  }

  return(
    <>
    <button onClick={increase}>+</button>
    <p>{count}</p>
    <button onClick={decrease}>-</button>
    </>
  )
}

export default Counter

// the ++ and -- operators in JavaScript are post-increment and post-decrement operators, meaning they return the current value of the operand and then increment or decrement it. Therefore, you're effectively passing the same value to setCount every time.

// To fix this, you should either use pre-increment (++count) or pre-decrement (--count)