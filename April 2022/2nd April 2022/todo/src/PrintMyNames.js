import React from 'react';

function PrintMyName(props){
    let {name, age} = props;
    return <h1>My name is {name} and i am of age {age}</h1>
  }
  
  function PrintMyNames() {
    return (
    <>
    <PrintMyName name="emma" age={32}></PrintMyName>
    <PrintMyName name="rashi" age={12}></PrintMyName>
    <PrintMyName name="jenny" age={62}></PrintMyName>
    <PrintMyName name="golu" age={30}></PrintMyName>
    <PrintMyName name="alex" age={35}></PrintMyName>
    </>
    )
  }

export default PrintMyNames;