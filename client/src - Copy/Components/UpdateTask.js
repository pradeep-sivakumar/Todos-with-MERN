import './UpdateTask.css'
import {React, useState} from 'react';
import axios from 'axios';

function UpdateTask(props)
{
    // console.log(props.task);
    const [task,setTask] = useState(props.task.todo);
    const updateTask = ()=>{
        if(task.trim() === '' || props.task.todo === task){
            props.removePopup()
        }
        else{
            axios.put(`http://localhost:8000/api/tasks/${props.task._id}`, {
                _id : props.task._id,
                todo : task,
                isComplete : props.task.isComplete
            }).then(res=> {
                props.removePopup();
                props.updateTask(res.data)
            }).catch(err=>console.log(err))
        }
    }
    return (
        <div className='popup'>
            <div className='popup-content'>
                <input type='text' placeholder='Update Task . . .' value={task} onChange = {event => setTask(event.target.value)}/>
                <button onClick={()=>{
                    updateTask();
                }}>Update</button>
            </div>
        </div>
    )
}

export default UpdateTask;