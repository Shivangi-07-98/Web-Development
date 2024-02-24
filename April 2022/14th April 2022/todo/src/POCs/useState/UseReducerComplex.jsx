import React, {useReducer} from 'react'

function MyUseReducerComplex() {
    const initialState = {value: 0};

    const reducer = (state, action) => {
        switch(action.type){
            case "Increase": return {...state, value: action.value};
            case "Decrease": return {...state, value: action.value};
            case "IncreaseByFive": return {...state, value: state.value + 5};
            default: return state;
        }
    }

    let [countObj, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({type: "Increase", value: 10})}>+</button>
      <span>{countObj.value}</span>
      <button onClick={() => dispatch({type: "Decrease", value: 5})}>-</button>
      <button onClick={() => dispatch({type: "IncreaseByFive"})}>Five</button>
    </div>
  )
}

export default MyUseReducerComplex