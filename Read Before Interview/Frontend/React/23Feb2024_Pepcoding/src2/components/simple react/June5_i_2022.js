import React, {useState, useReducer} from 'react';

function reducer(state, action){
    switch(action.type){
        case "increase": return state+1;
        case "decrease": return state-1;
        default: console.log("Wrong type");
    }
}

function Ball() {
    // const [balls, setBalls] = useState(10);

    // const Increase = () => {
    //     setBalls(balls + 1)
    // }

    // const Decrease = () => {
    //     setBalls(balls - 1)
    // }

    const [balls, dispatch] = useReducer(reducer, 10);

  return (
    <div>
        <h1>Balls</h1>
        <h2>No. of Balls: {balls}</h2>
        <button onClick={() => {dispatch({type: "increase"})}}>+</button>
        <button onClick={() => {dispatch({type: "decrease"})}}>-</button>
    </div>
  )
}

export default Ball