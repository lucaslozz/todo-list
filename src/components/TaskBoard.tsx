import { useState } from "react";
import styles from "./TaskBoard.module.css"
import { TaskPost } from "./TaskPost"



export interface AllTasks{
  id:string;
  content:string;
  isChecked?:boolean
}



interface TaskBoardProps {
  content:AllTasks[]
  deleteTask: (content:AllTasks)=> void
}

export function TaskBoard({content,deleteTask}:TaskBoardProps){

  const [completedTask, setCompletedTask]=useState<number>(0)

  function isCompleted(isChecked:boolean){
    if (isChecked) {
      setCompletedTask(completedTask + 1);
    } else {
      setCompletedTask(completedTask - 1);
    }
  }

  return (
  <article className={styles.boardContainer}>
    <header>
      <strong className={styles.createdTask}>Tarefas criadas <span>{content.length}</span></strong>
      <strong className={styles.completedTask}>Concluídas <span>{completedTask} de {content.length}</span></strong>
    </header> 
    <main className={styles.taskPostContainer}>
      {content.map(item=>{
        return <TaskPost key={item.id} task={item} deleteTask={deleteTask} isCompleted={isCompleted} />
      })}
    </main>
  </article>
  )
}