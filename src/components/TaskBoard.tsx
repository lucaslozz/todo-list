import styles from "./TaskBoard.module.css"
import { TaskPost } from "./TaskPost"

interface TaskBoardProps{
  content:string[];
  deleteTask: (content:string)=> void
}

export function TaskBoard({content,deleteTask}:TaskBoardProps){
  return (

  <article className={styles.boardContainer}>
    <header>
      <strong className={styles.createdTask}>Tarefas criadas <span>5</span></strong>
      <strong className={styles.completedTask}>Concluídas <span>2 de 5</span></strong>
    </header> 
    <main className={styles.taskPostContainer}>
      {content.map(content=>{
        return <TaskPost key={content} content={content} deleteTask={deleteTask}/>
      })}
    </main>
  </article>
  )
}