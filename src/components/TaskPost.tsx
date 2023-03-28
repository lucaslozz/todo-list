import { Trash,Circle } from "@phosphor-icons/react"
import styles from "./TaskPost.module.css"

interface TaskPostProps{
  content:string
}

export function TaskPost({content}:TaskPostProps){
  return (
    <div  className={styles.taskPost}>
        <div className={styles.taskInfo}>
          <button><Circle size={17.45} weight="bold" /></button>
        <p>{content}</p>
        </div>
      <button title="Deletar Comentário"><Trash /></button>
    </div>)
}