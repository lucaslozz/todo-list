import styles from "./TaskBoard.module.css"
import { TaskPost } from "./TaskPost"

export function TaskBoard(){
  return (

  <article className={styles.boardContainer}>
    <header>
      <strong className={styles.createdTask}>Tarefas criadas <span>5</span></strong>
      <strong className={styles.completedTask}>Concluídas <span>2 de 5</span></strong>
    </header> 
    <main className={styles.taskPostContainer}>
      <TaskPost/>
      <TaskPost/>
    </main>
  </article>
  
  
  
  )
}