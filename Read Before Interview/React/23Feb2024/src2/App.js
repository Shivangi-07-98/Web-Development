import React from 'react'
import Ball from './components/Ball';
import Bat from './components/Bat';
import User from './components/User';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Ball></Ball>
        <Bat></Bat>
        <User></User>
      </Provider>
    </>
  )
}

export default App