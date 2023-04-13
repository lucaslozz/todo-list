import { ReactNode, createContext, useReducer, useState } from 'react'
import { AllTasks, taskReducer } from '../reducers/tasks/reducer'
import {
  creteNewTaskAction,
  deleteTaskAction,
  refreshTaskStatusAction,
} from '../reducers/tasks/actions'

interface TaskContextProviderProps {
  children: ReactNode
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
  const [taskState, dispatch] = useReducer(taskReducer, { allTasks: [] })
  const { allTasks } = taskState
  const [newTask, setNewTask] = useState<AllTasks>({
    id: '',
    content: '',
    isChecked: false,
  })

  function storageNewTaskFromInput(newTask: AllTasks) {
    setNewTask(newTask)
  }

  function createNewTask() {
    dispatch(creteNewTaskAction(newTask))
    setNewTask({ id: '', content: '', isChecked: false })
  }

  function deleteTask(taskToDelete: AllTasks) {
    dispatch(deleteTaskAction(taskToDelete))
  }

  function refreshTaskStatus(taskToRefresh: AllTasks) {
    dispatch(refreshTaskStatusAction(taskToRefresh))
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
