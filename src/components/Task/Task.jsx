import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'bootstrap';

import { useDispatch } from 'react-redux';
import { editTask,changeDone } from '../../redux/actions/action';


const Task = (task) => {

  const dispatch=useDispatch()


    const[show,setShow]=useState(false);
    const handleClose =()=>setShow(false);

     const handleShow = () => setShow(true);

     const [edited,setEdited]=useState("")
     const handleEdit=(e)=>{
      setEdited=(e.target.value)
     }
 const handleSave=()=>{
  dispatch(editTask({edited,id:task.id}))
  handleClose();

 }
  const handleDone =()=>{
    dispatch(changeDone(task.id))
  }
  return (
    <div>
      <h3>{task.description}</h3>

      <Button variant={task.isDone ? "outline-danger" : "outine-success"} onClick={handleDone}>
        {task.isDone ? "Undo" : "Done"}
      </Button>
      <Button variant="outline-warning" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="text" placeholder="Edit Task" defaultValue={task.description}  onChange={handleEdit}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Task
