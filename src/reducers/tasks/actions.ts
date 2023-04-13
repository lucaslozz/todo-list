import { AllTasks } from './reducer'

export enum ActionTypes {
  CREATE_NEW_TASK_ACTION = 'CREATE_NEW_TASK_ACTION',
  DELETE_TASK_ACTION = 'DELETE_TASK_ACTION',
  REFRESH_TASK_STATUS_ACTION = 'REFRESH_TASK_STATUS_ACTION',
}

export function creteNewTaskAction(newTask: AllTasks) {
  return {
    type: 'CREATE_NEW_TASK_ACTION',
    payload: { newTask },
  }
}

export function deleteTaskAction(taskToDelete: AllTasks) {
  return { type: 'DELETE_TASK_ACTION', payload: { taskToDelete } }
}

export function refreshTaskStatusAction(taskToRefresh: AllTasks) {
  return {
    type: 'REFRESH_TASK_STATUS_ACTION',
    payload: { taskToRefresh },
  }
}
