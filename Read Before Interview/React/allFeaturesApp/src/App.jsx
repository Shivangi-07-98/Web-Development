import React from 'react'
import LearnHooks from './component/LearnHooks'
import {LearnExport} from './component/LearnExport'
import {ImageSlider} from './component/ImageSlider'

function App() {
  const country = "Geneva"
  return (
    <>
    {/* <LearnHooks country='India'/> */}
    <LearnHooks country={country}/>
    <LearnExport/>
    <ImageSlider/>
    </>
  )
}

export default App