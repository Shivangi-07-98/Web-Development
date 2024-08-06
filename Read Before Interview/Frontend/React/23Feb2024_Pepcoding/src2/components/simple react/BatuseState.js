import React, {useState} from 'react'

function Bat() {
    const [bat, setBat] = useState(10);
    const [tosell, setTochangeBat] = useState("");
    const sellBat = () => {
        setBat(bat - parseInt(tosell));
        setTochangeBat("");
    }
    const buyBat = () => {
        setBat(bat + parseInt(tosell));
        setTochangeBat("");
    }

  return (
    <div>
        <h1>Bat</h1>
        <h2>No. of Bat: {bat}</h2>
        <input type="text" value={tosell} onChange={(e) => {setTochangeBat(e.target.value)}}></input>
        <button onClick={sellBat}>Sell</button>
        <button onClick={buyBat}>Buy</button>
    </div>
  )
}

export default Bat