import React,{useState,useEffect} from "react";
import { Button } from "bootstrap";
import { useSelector,useDispatch } from "react-redux";
import Task from "../Task/Task";
import { reset } from "../../redux/actions/action";


const ListTask = () => {

  const dispatch=useDispatch()
  const tasksList = useSelector((state) => state.taskReducer.tasksList);

  const [showDone,setShowDone]=useState(false)
  const [showNotDone, setShowNotDone] = useState(false);
  const[tasks,setTasks]=useState([])

  const handleShowDone=()=>{
    setShowDone(true)
    setShowNotDone(false)
  }
  const handleShowNotDone = () => {
    setShowNotDone(true);
     setShowDone(false);
  };

  const handleList=()=>{
    if(showDone===true){
      setTasks(tasksList.filter((task)=>task.isDone===true))
    }else if(showNotDone===true){setTasks(tasksList.filter((task) => task.isDone === false));}
  }

useEffect(()=>{
  setTasks(tasksList)

  handleList()
},[showDone,showNotDone,tasksList])

const handleReset=()=>{
  dispatch(reset())
  setShowDone(false)
  setShowNotDone(false)
}



  return (
    <div>
      <div>
        <Button variant="success" onClick={handleShowDone}>Fiter by done</Button>
        <Button variant="danger" onClick={handleShowNotDone}>Fiter by not done</Button>
        <Button variant="info" onClick={handleReset}>Reset</Button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
