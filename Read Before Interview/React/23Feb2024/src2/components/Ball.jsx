import React, {useState} from 'react';
import {connect} from 'react-redux';

function Ball(props) {

  return (
    <>
        <h1>Balls</h1>
        <h2>No. of Balls: {props.balls}</h2>
        <button onClick={props.buyBall}>buy</button>
        <button onClick={props.sellBall}>sell</button>
    </>
  )
}

// to get your state variable from redux store
const mapStateToProps = (store) => {
  return store.Ball;
}
const mapDispatchtoProps = (dispatch) => {
  return{
    sellBall: () => {
      dispatch({
      type: "decrease"
    })
  },
    buyBall: () => {
      dispatch({
      type: "increase"
    })
  }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Ball);