import { Trash,Circle } from "@phosphor-icons/react"
import styles from "./TaskPost.module.css"

export function TaskPost(){
  return (
    <div  className={styles.taskPost}>
        <div className={styles.taskInfo}>
          <button><Circle size={17.45} weight="bold" /></button>
        <p>Montar projeto tic tac toe</p>
        </div>
      <button title="Deletar Comentário"><Trash /></button>
    </div>)
}