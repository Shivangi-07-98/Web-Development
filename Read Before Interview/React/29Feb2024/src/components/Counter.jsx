import React, { useState } from 'react'

function Counter(){
  // its wrong because i am using curly braces insted of this []

  const [count, setCount] = useState(0);

  const increase = () => {
    // let count = count + 1;
    setCount(count++);
  }

  const decrease = () => {
    // let count = count - 1;
    setCount(count--);
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