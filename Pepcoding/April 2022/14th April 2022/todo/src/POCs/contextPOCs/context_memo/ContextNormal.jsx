import React, {useContext, useState} from 'react';
let Context = React.createContext("Hello");


function ContextNormal() {
    console.log("rendered context normal");
    let [message, setMessage] = useState("Fake Message");
    const cMessage = () => {
        setMessage("Message Updated")  
    }

  return (
    <div>
        <Context.Provider value = {message}>
      <div>Context Normal</div>
      <button onClick={cMessage}>Click Button</button>
      <MemoParent></MemoParent>
      </Context.Provider>
    </div>
  )
}

// The React.memo function should be used to wrap a component, not to be included directly within a component function. 

const MemoizedParent = React.memo(Parent);
function MemoParent() {
    return <MemoizedParent />;
  }
  
// jasbir sir did this and did not undertand the error so he made another file of all the components  

// function MemoParent() {
//     return React.memo(Parent);
// }

function Parent() {
    console.log("rendered parent")
  return (
    <div>
      <div>I am a parent</div>
      <Children></Children>
    </div>
  )
}

function Children() {
    console.log("rendered Children")
  return (
    <div>
      <div>I am a Children</div>
      <GrandChildren></GrandChildren>
    </div>
  )
}

function GrandChildren() {
    let message = useContext(Context);
    console.log("rendered GrandChildren")
  return (
    <div>
      <div>I am a GrandChildren</div>
      <div>God sent this message - {message}</div>
    </div>
  )
}

export default ContextNormal

