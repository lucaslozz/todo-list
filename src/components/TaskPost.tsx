import { Trash,Circle, CheckCircle } from "@phosphor-icons/react"
import { useState } from "react";
import styles from "./TaskPost.module.css"
import { AllTasks } from "./TaskBoard";

interface TaskPostProps{
  task:AllTasks;
  deleteTask: (content:AllTasks)=> void
  isCompleted: (content:boolean)=>void
  
}

export function TaskPost({task,deleteTask,isCompleted}:TaskPostProps){

  const [isChecked, setIsChecked]=useState<boolean>(false)
  

  function handleDeleteTask(){
    deleteTask(task);
  }

  function handleChecked(){
    setIsChecked(() => {
      isCompleted(!isChecked)
      return !isChecked;
    });
  }
  
  return (
    <div  className={styles.taskPost}>
      <div className={styles.taskInfo}>
        <button onClick={handleChecked}>
        {!isChecked? 
        <Circle size={17.45} className={styles.default} />:<CheckCircle size={17.45} weight="fill" className={styles.checked}/>}
        </button>
        <p className={isChecked? styles.taskCompleted:styles.taskNotCompled}>{task.content}</p>
      </div>
      <button type="button" title="Deletar Comentário" onClick={handleDeleteTask}><Trash /></button>
    </div>)
}