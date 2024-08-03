import React, {useState} from 'react'

function UseState() {
    const [count, setCount] = useState(0);
    
    const Increase = () => {
        setCount(count + 1);
    }

    const Decrease = () => {
        setCount(count - 1);
    }

    const IncreaseByFive = () => {
        for(let i = 1; i <= 5; i++){
            setCount((count)=>{return count+1})
        }
    }

  return (
    <div>
      <button onClick={Increase}>+</button>
      <span>{count}</span>
      <button onClick={Decrease}>-</button>
      <button onClick={IncreaseByFive}>Five</button>
    </div>
  )
}

export default UseState