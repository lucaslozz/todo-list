import { Trash,Circle } from "@phosphor-icons/react"
import styles from "./TaskPost.module.css"
import { PointerEvent, SyntheticEvent  } from "react"

interface TaskPostProps{
  content:string;
  deleteTask: (content:string)=> void
}

export function TaskPost({content,deleteTask}:TaskPostProps){

  function handleDeleteTask(){
    deleteTask(content);
  }
  
  return (
    <div  className={styles.taskPost}>
        <div className={styles.taskInfo}>
          <button><Circle size={17.45} weight="bold" /></button>
        <p>{content}</p>
        </div>
      <button type="button" title="Deletar Comentário" onClick={handleDeleteTask}><Trash /></button>
    </div>)
}