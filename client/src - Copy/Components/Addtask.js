import './Addrask.css';
import React, {useState} from 'react';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

function Addtask(props)
{
    const [task,Settask]  = useState("");
    const addTask = ()=>{
        if(task.trim() === ''){
            return
        }
        else{
            // console.log(task);
            axios.post('http://localhost:8000/api/tasks', {
                todo : task,
                isComplete : false
            })
            .then(res=> {
                Settask("");
                // console.log(res.data);
                props.addTask(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    return (
        <div className='addTask'>
            
            <input type='text' placeholder='Add Task...' value={task} onChange= {event => Settask(event.target.value)}/>
            <button style={{}} onClick={()=>{
                addTask()
            }}><AddIcon /></button>
        </div>
    )
}

export default Addtask;