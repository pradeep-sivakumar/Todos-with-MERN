import './Todolist.css';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';



function Todolist(props) {

    const todolist = props.todolist.map((task,index)=>{

        const taskComplete = ()=>{
            // console.log("Yeah")
            axios.put(`http://localhost:8000/api/tasks/${task._id}` , {
                _id : task.id,
                todo: task.todo,
                isComplete : !(task.isComplete)
            }).then(res => props.taskcomplete(res.data)).catch(err=>console.log(err))
        }

        const removeTask = (id)=>{
            axios.delete(`http://localhost:8000/api/tasks/${task._id}`).then(res=> props.removeTask(res.data)).catch(err=>console.log(err))
        }

        return (<li key={index}>
            <div style={{display:'flex'}}>
                <CheckIcon className= { task.isComplete? 'isComplete' : 'checkicon' } onClick= {()=>{
                    taskComplete();
                }}/>
                <p className={task.isComplete ? 'taskcomplete' : '' } onClick= {()=>{
                    taskComplete();
                }}>{task.todo}</p>
            </div>
            <div>
                <EditIcon className='edit' onClick={()=>{
                    props.tasktoUpdate(task)
                    props.showPopup();
                }}/>
                <DeleteIcon className='close' onClick={
                    ()=>{
                        removeTask(task._id);
                    }
                }/>
            </div>
        </li>)
    })
    return (
        <div className='tasklist'>
            <h1 className='Header'>Todo's</h1>
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default Todolist;