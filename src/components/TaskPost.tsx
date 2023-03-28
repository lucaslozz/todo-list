import { Trash,Circle, CheckCircle } from "@phosphor-icons/react"
import { useState } from "react";
import styles from "./TaskPost.module.css"

interface TaskPostProps{
  content:string;
  deleteTask: (content:string)=> void
}

export function TaskPost({content,deleteTask}:TaskPostProps){

  const [isChecked, setIsChecked]=useState<boolean>(false)
  const [completed, isCompleted]=useState<number>(0)

  function handleDeleteTask(){
    deleteTask(content);
  }

  function handleChecked(){
    setIsChecked(!isChecked);

  }
  
  return (
    <div  className={styles.taskPost}>
      <div className={styles.taskInfo}>
        <button onClick={handleChecked}>
        {!isChecked? 
        <Circle size={17.45} className={styles.default} />:<CheckCircle size={17.45} weight="fill" className={styles.checked}/>}
  
        </button>
        <p className={isChecked? styles.taskCompleted:styles.taskNotCompleted}>{content}</p>
      </div>
      <button type="button" title="Deletar Comentário" onClick={handleDeleteTask}><Trash /></button>
    </div>)
}