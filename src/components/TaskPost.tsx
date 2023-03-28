import { Trash } from "@phosphor-icons/react"
import styles from "./TaskPost.module.css"

export function TaskPost(){
  return (
  <div className={styles.taskPostContainer}>
    <div  className={styles.taskPost}>
      <form className={styles.taskForm}>
        <input type="checkBox" />
        <p>Montar projeto tic tac toe</p>
      </form> 
      <button title="Deletar Comentário"><Trash /></button>
      </div>
  </div>)
}