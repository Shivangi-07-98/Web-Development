// create todo app in same file
import React, {useState} from 'react'

function InputBox (props){
    const {task, setTask} = props;
    const {takeInput} = props;
    const [input, setInput] = useState(""); 
    

    const addItems = () => {
        
        if(input.trim().length !== 0){
            const updatedTask = [...task, input]
            setTask(updatedTask);
            setInput("")
            takeInput(updatedTask);
        }
        
    }

    return(
        <div>
            <input value={input} onChange={(e) => {setInput(e.target.value)}}></input>
            <button onClick={addItems}>Add Items</button>
        </div>
    )

}

function ListItems (props){
    const {task} = props;
    return(
        <div>
            <ul>
                {task.map((item, idx) => 
                {return (<li key={idx}>{item}</li>)}
                )}
            </ul>
        </div>
    )

}

function Todo() {
    const [task, setTask] = useState([]);
    const takeInput = (task) => {
        setTask(task);
    }
  return (
    <div>
      <h1>Todo App</h1>
      <InputBox takeInput={takeInput}></InputBox>
      <ListItems task={task}></ListItems>
    </div>
  )
}

export default Todo