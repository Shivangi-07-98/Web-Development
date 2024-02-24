import React from 'react'

function PrintMyName(props) {
  const {name, age} = props; // const likhna padega
  return (
    <div>
      My name is {name} and i am of age {age}. {/* curly braces mai hi likhna padega */}
    </div> 
  )
}

function PrintMyNames() {
  return (
    <div>
      <PrintMyName name='Shivangi' age='25'></PrintMyName> {/* curly braces mai tbh likhte hai jb pehle se define kia ho nhi toh comma mai */}
      <PrintMyName name='xyz' age='24'></PrintMyName>
    </div>
  )
}

export default PrintMyNames
// export default mai wohi naam hoga jo function mai hai 
// function mai return likhna compulsory hai