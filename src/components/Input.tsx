import { PlusCircle } from "@phosphor-icons/react"
import { FormEvent, useState,ChangeEvent } from "react"
import styles from "./Input.module.css"
import { TaskBoard } from "./TaskBoard"
import { AllTasks } from "./TaskBoard"
import { v4 as uuidv4 } from 'uuid';



export function Input(){

  const [allTasks, setAllTesks]=useState<AllTasks[]>([])
  const [newTask, setNewTask]=useState<AllTasks>({id:"",content:""})

  function handleChange(event:ChangeEvent<HTMLTextAreaElement>){
    let addNewTask = {
      id: uuidv4(),
      content: event.target.value
    }
    setNewTask(addNewTask)
  }

  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setAllTesks([...allTasks,...[newTask]])
    setNewTask({id:"",content:""})    
  }

  function deleteTask(taskToDelete:AllTasks){
    const withoutDeletedTask=allTasks.filter(content =>{
      return content.id !== taskToDelete.id;
    })
    setAllTesks(withoutDeletedTask);
  }

  return( 
      <div>
        <form className={styles.formContainer} onSubmit={handleSubmit} >
          <textarea name="input" placeholder="Adicione uma nova tarefa" onChange={handleChange} value={newTask.content} />
          <button type="submit" >Criar <PlusCircle size={16} weight="bold"/></button>
        </form>
         <div>
          <TaskBoard content={allTasks} deleteTask={deleteTask}/>
        </div>
      </div>
  )
}