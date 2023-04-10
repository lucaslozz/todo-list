import { PlusCircle } from "@phosphor-icons/react"
import { FormEvent, useState, ChangeEvent } from "react"
import styles from "./Input.module.css"
import { TaskBoard } from "./TaskBoard"
import { AllTasks } from "./TaskBoard"
import { v4 as uuidv4 } from 'uuid';



export function Input() {

  const [allTasks, setAllTasks] = useState<AllTasks[]>([])
  const [newTask, setNewTask] = useState<AllTasks>({ id: "", content: "", isChecked: false })

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    let addNewTask = {
      id: uuidv4(),
      content: event.target.value,
      isChecked: false
    }
    setNewTask(addNewTask)

  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAllTasks([...allTasks, ...[newTask]])
    setNewTask({ id: "", content: "", isChecked: false })
  }

  function deleteTask(taskToDelete: AllTasks) {
    const withoutDeletedTask = allTasks.filter(content => {
      return content.id !== taskToDelete.id;
    })
    setAllTasks(withoutDeletedTask);
  }

  function refreshTaskStatus(taskToRefresh: AllTasks) {
    const taskRefreshed = allTasks.map(item => {
      if (item.id === taskToRefresh.id) {
        item.id = taskToRefresh.id;
      }
      return item
    })
    setAllTasks(taskRefreshed)

  }

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit} >
        <textarea name="input" placeholder="Adicione uma nova tarefa" onChange={handleChange} value={newTask.content} />
        <button type="submit" disabled={newTask.content.length === 0} >Criar <PlusCircle size={16} weight="bold" /></button>
      </form>
      <div>
        <TaskBoard content={allTasks} deleteTask={deleteTask} refreshTaskStatus={refreshTaskStatus} />
      </div>
    </div>
  )
}