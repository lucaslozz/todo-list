import { PlusCircle } from '@phosphor-icons/react'
import { FormEvent, ChangeEvent, useContext } from 'react'
import styles from './Input.module.css'
import { TaskBoard } from '../TaskBoard/TaskBoard'

import { v4 as uuidv4 } from 'uuid'
import { TaskContext } from '../../context/TaskContext'

export function Input() {
  const { newTask, createNewTask, storageNewTaskFromInput } =
    useContext(TaskContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const addNewTask = {
      id: uuidv4(),
      content: event.target.value,
      isChecked: false,
    }
    storageNewTaskFromInput(addNewTask)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    createNewTask()
  }

  return (
    <main>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <textarea
          name="input"
          placeholder="Adicione uma nova tarefa"
          onChange={handleChange}
          value={newTask.content}
        />
        <button type="submit" disabled={newTask.content?.length === 0}>
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>
      <div>
        <TaskBoard />
      </div>
    </main>
  )
}
