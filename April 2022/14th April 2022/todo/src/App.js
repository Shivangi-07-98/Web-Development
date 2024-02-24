import React from 'react'
import CounterParent from './POCs/useMemo/CounterParent'
// import ContextNormal from './contextPOCs/context_memo/ContextNormal'
// import UseState from './POCs/useState/UseState'
// import UseReducer from './POCs/useState/UseReducer'
// import UseReducerComplex from './POCs/useState/UseReducerComplex'

function App() {
  return (
    <div>
      {/* <ContextNormal></ContextNormal> */}
      {/* <UseState></UseState> */}
      {/* <UseReducer></UseReducer> */}
      {/* <UseReducerComplex></UseReducerComplex> */}
      <CounterParent></CounterParent>
    </div>
  )
}

export default App
