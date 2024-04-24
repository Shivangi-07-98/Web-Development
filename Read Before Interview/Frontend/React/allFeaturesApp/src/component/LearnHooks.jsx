import React, {useState} from 'react'

function LearnHooks({country}) {
  const [name, setName] = useState("Elsa Stark")
  return (
    <>
    <h1>My name is {name} from {country}</h1>
    <button onClick={() => {setName("Alex Watson")}}>Change Name</button>
    </>
  )
}

export default LearnHooks