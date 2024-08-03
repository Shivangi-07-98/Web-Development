import React from 'react'
const ContextMessage = React.createContext();

function ContextAPI() {
    return (
        <div>
            <ContextMessage.Provider value="Be safe">
                <GrandParent></GrandParent>
            </ContextMessage.Provider>
        </div>
    )
}

function GrandParent() {
    return (
        <div>
            <div>GrandParent</div>
            <div>⬇️</div>
            <Parent></Parent>
        </div>
    )
}

function Parent() {
    return (
        <div>
            <div>Parent</div>
            <div>⬇️</div>
            <Child></Child>
        </div>
    )
}

function Child() {
    let message = React.useContext(ContextMessage);
    return (
        <div>
            <div>Child</div>
            {/* <div>Children say's Hi</div> */}
            <div>Grandpa say's {message}</div>
        </div>
    )
}

export default ContextAPI;