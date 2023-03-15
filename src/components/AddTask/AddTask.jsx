import React,{useState} from "react";
import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/action";

const AddTask = () => {

    const dispatch=useDispatch()

    const[newTask,setNewTask]=useState("")

    const handleChange=(e)=>{

        setNewTask=(e.target.value)
    }

    const handleAdd =()=>{

        dispatch(addTask(newTask))
    }
  return (
    <div>
      <input type="text" placeholder="enter the task you want to add"  onChange={handleChange()}/>
      <Button variant="secondary" onClick={handleAdd}>Add Task</Button>
    </div>
  );
};

export default AddTask;
