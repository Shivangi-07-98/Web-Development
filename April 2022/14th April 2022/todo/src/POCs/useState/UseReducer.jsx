import React, {useReducer} from 'react'

function MyUseReducer() {
    const initialState = 0;

    const reducer = (state, action) => {
        switch(action){
            case "Increase": return state+1;
            case "Decrease": return state-1;
            case "IncreaseByFive": return state+5;
            default: return state;
        }
    }

    let [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch("Increase")}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch("Decrease")}>-</button>
      <button onClick={() => dispatch("IncreaseByFive")}>Five</button>
    </div>
  )
}

export default MyUseReducer;