import './App.css';
import {useState} from "react";

function App() {
  const [list, setlist] = useState([]);

  const addNewTask = (task) => {
    // console.log("app "+task);
    let copyOfList = [...list];
    copyOfList.push({task: task, id: copyOfList.length + 1});
    setlist(copyOfList);
    console.log(list);
  }

  const deleteTask = (task) => {
    let filteredList = list.filter((taskObj) => {
      return taskObj.task != task;
    })
    setlist(filteredList);
  }

  return (
    <div className="App">
      <InputBox addNewTask={addNewTask}></InputBox>
      <TaskList list={list} deleteTask={deleteTask}></TaskList>
    </div>
  );
}

function InputBox(props) {
  let [cInput, setInput] = useState("");

  const setcInput = (e) => {
    setInput(e.target.value)
  }
  
  const setFinalTask = () => {
    props.addNewTask(cInput);
    setInput("");
  }

  return (
    <div>
      <input type="text" value={cInput} onChange={setcInput}></input>
      <button onClick={setFinalTask}>Add Task</button>
    </div>
  );
}

function TaskList(props) {
  let {list, deleteTask} = props;

  return (list.map((taskObj, idx) => {
    return (<ListItem taskObj={taskObj} deleteTask={deleteTask} key={idx}></ListItem>
    )
  })
  );
}


function ListItem(props){
  let {taskObj, deleteTask, idx} = props;
  return(
    <div style={{display: "flex", justifyContent: "center"}}key={taskObj.id}>
      <div>{taskObj.task}</div>
      <button type="button" onClick={() => {deleteTask(taskObj.task)}}>Delete</button>
    </div>
  )
}

export default App;