import { PlusCircle } from "@phosphor-icons/react"
import { FormEvent, useState,ChangeEvent } from "react"
import styles from "./Input.module.css"
import { TaskBoard } from "./TaskBoard"



export function Input(){

  const [content, setContent]=useState<string[]>([])
  const [newTask, setNewTask]=useState<string[]>([])

  function handleChange(event:ChangeEvent<HTMLTextAreaElement>){
    setNewTask([event.target.value])
  }

  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setContent([...content,...newTask])
    setNewTask([""])
  }

  function deleteTask(taskToDelete:string){
    const withoutDeletedTask=content.filter(content =>{
      return content !== taskToDelete;
    })
    setContent(withoutDeletedTask)
  }

  return( 
      <div>
      <form className={styles.formContainer} onSubmit={handleSubmit} >
        <textarea name="input" placeholder="Adicione uma nova tarefa" onChange={handleChange} value={newTask} />
        <button type="submit" >Criar <PlusCircle size={16} weight="bold"/></button>
      </form>
      <div>
        <TaskBoard content={content} deleteTask={deleteTask}/>
     </div>
      
      </div>
  )
}