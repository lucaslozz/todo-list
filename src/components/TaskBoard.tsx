import { useState } from "react";
import styles from "./TaskBoard.module.css"
import { TaskPost } from "./TaskPost"



export interface AllTasks{
  id:string;
  content:string;
  isChecked:boolean
}



interface TaskBoardProps {
  content:AllTasks[]
  deleteTask: (content:AllTasks)=> void
  refreshTaskStatus: (taskToRefresh:AllTasks)=>void
}

export function TaskBoard({content,deleteTask,refreshTaskStatus}:TaskBoardProps){

  const completedTask= content.reduce((acc, item)=>{
    if(item.isChecked === true){
      acc++
    }
    return acc
  },0)

  

  return (
  <article className={styles.boardContainer}>
    <header>
      <strong className={styles.createdTask}>Tarefas criadas <span>{content.length}</span></strong>
      <strong className={styles.completedTask}>Concluídas <span>{completedTask? `${completedTask} de ${content.length}`:completedTask}</span></strong>
    </header> 
    <main className={styles.taskPostContainer}>
      {content.map(item=>{
        return <TaskPost key={item.id} task={item} deleteTask={deleteTask} refreshTaskStatus={refreshTaskStatus} />
      })}
    </main>
  </article>
  )
}