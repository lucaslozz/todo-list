import { ActionTypes } from './actions'

export interface AllTasks {
  id: string
  content: string
  isChecked: boolean
}

export interface TaskState {
  allTasks: AllTasks[]
}

export function taskReducer(state: TaskState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_TASK_ACTION: {
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload.newTask],
      }
    }
    case ActionTypes.DELETE_TASK_ACTION: {
      const withoutDeletedTask = state.allTasks.filter((content) => {
        return content.id !== action.payload.taskToDelete.id
      })
      return { ...state, allTasks: withoutDeletedTask }
    }

    case ActionTypes.REFRESH_TASK_STATUS_ACTION: {
      const taskRefreshed = state.allTasks.map((item) => {
        if (item.id === action.payload.taskToRefresh.id) {
          item = action.payload.taskToRefresh
        }
        return item
      })
      return { ...state, taskRefreshed }
    }
    default: {
      return state
    }
  }
}
