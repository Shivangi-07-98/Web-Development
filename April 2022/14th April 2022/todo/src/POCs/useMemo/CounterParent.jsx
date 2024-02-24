import React, {useMemo, useState} from 'react'

function CounterParent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const Increase1 = () => {
    setCount1((count1) => {return count1 + 1})
  }

  const Increase2 = () => {
    setCount2((count2) => {return count2 + 1})
  }

  const isEven = useMemo(() => {

    let i = 0;
    while(i < 2000000000) i++;

    return count1 % 2 === 0;
  }, [count1]);


  return (
    <div>
      <button onClick={Increase1}>Count - {count1}</button>
      <span> {isEven ? "even" : "odd"}</span>
      <br></br>
      <button onClick={Increase2}>Count - {count2}</button>
    </div>
  )
}

export default CounterParent