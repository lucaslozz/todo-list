import { ReactNode, createContext, useState } from 'react'

interface TaskContextProviderProps {
  children: ReactNode
}

interface AllTasks {
  id: string
  content: string
  isChecked: boolean
}

interface TaskContextType {
  allTasks: AllTasks[]
  newTask: AllTasks
  createNewTask: () => void
  deleteTask: (taskToDelete: AllTasks) => void
  refreshTaskStatus: (taskToRefresh: AllTasks) => void
  storageNewTaskFromInput: (newTask: AllTasks) => void
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [allTasks, setAllTasks] = useState<AllTasks[]>([])
  const [newTask, setNewTask] = useState<AllTasks>({
    id: '',
    content: '',
    isChecked: false,
  })

  function createNewTask() {
    setAllTasks([...allTasks, ...[newTask]])
    setNewTask({ id: '', content: '', isChecked: false })
  }

  function storageNewTaskFromInput(newTask: AllTasks) {
    setNewTask(newTask)
  }

  function deleteTask(taskToDelete: AllTasks) {
    const withoutDeletedTask = allTasks.filter((content) => {
      return content.id !== taskToDelete.id
    })
    setAllTasks(withoutDeletedTask)
  }

  function refreshTaskStatus(taskToRefresh: AllTasks) {
    const taskRefreshed = allTasks.map((item) => {
      if (item.id === taskToRefresh.id) {
        item = taskToRefresh
      }

      return item
    })
    setAllTasks(taskRefreshed)
  }
  return (
    <TaskContext.Provider
      value={{
        allTasks,
        newTask,
        createNewTask,
        deleteTask,
        refreshTaskStatus,
        storageNewTaskFromInput,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
