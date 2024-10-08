import React from 'react'
import {connect} from 'react-redux';

function Bat(props) {
  return (
    <>
        <h1>Bat</h1>
        <h2>No. of Bat: {props.bat}</h2>
        <input type="text" value={props.value} onChange={(e) => {let value = e.target.value;
            props.setValue(value)}}></input>
        <button onClick={props.sellBat}>Sell</button>
        <button onClick={props.buyBat}>Buy</button>
        </>
  )
}

const mapStateToProps = (store) => {
    return store.Bat;
}

const mapDispatchtoProps = (dispatch) => {
    return{
        sellBat: () => {
            dispatch({type: "sell_bat"})
        },
        buyBat: () => {
            dispatch({type: "buy_bat"})
        },
        setValue: (value) => {
            dispatch({
                type: "set_value",
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Bat);