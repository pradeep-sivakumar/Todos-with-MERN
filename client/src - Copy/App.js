import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Addtask from './Components/Addtask';
import Todolist from './Components/Todolist'
import UpdateTask from './Components/UpdateTask';

function App() {
  const [todolist, settodolist] = useState([]);


  const [tasktoUpdate, setTasktoUpdate] = useState({});
  const [showPopup,setShowPopup] = useState(false);

  const taskcomplete = (task)=>{
    const newList = [...todolist]
    newList.forEach(item=>{
      if(item._id === task._id)
      {
        item.isComplete = task.isComplete
      }
    })
    settodolist(newList)
  }

  const removeTask = (task)=>{
    const newList = todolist.filter(item=> !(item._id === task._id))
    settodolist(newList)
  }

  useEffect(()=>{
    axios.get('http://localhost:8000/api/tasks')
    .then(res=>{
      settodolist(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[] )

const addTask = newTask =>{
  settodolist([...todolist,newTask]);
}

  const updateTask = task =>{
    const newList = [...todolist];
    newList.forEach(item=>{
      if(item._id === task._id){
        item.todo = task.todo
      }
    })
    settodolist(newList)
  }

  return (
    <div>
    <h1 className='Header'>Add Task</h1>
      <Addtask addTask={addTask}/>

      <Todolist todolist={todolist} taskcomplete={taskcomplete} removeTask={removeTask} tasktoUpdate={task => setTasktoUpdate(task)} showPopup={()=> setShowPopup(!showPopup)}/>
      {showPopup && <UpdateTask task= {tasktoUpdate} updateTask={updateTask} removePopup={()=> setShowPopup(!showPopup)}/>}
    </div>
  );
}

export default App;
