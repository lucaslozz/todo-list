import { Trash, Circle, CheckCircle } from '@phosphor-icons/react'
import styles from './TaskPost.module.css'
import { AllTasks } from './TaskBoard'

interface TaskPostProps {
  task: AllTasks
  deleteTask: (content: AllTasks) => void
  refreshTaskStatus: (taskToRefresh: AllTasks) => void
}

export function TaskPost({
  task,
  deleteTask,
  refreshTaskStatus,
}: TaskPostProps) {
  function handleDeleteTask() {
    deleteTask(task)
  }

  function handleChecked() {
    task.isChecked = !task.isChecked
    refreshTaskStatus(task)
  }

  return (
    <div className={styles.taskPost}>
      <div className={styles.taskInfo}>
        <button onClick={handleChecked}>
          {!task.isChecked ? (
            <Circle size={17.45} className={styles.default} />
          ) : (
            <CheckCircle
              size={17.45}
              weight="fill"
              className={styles.checked}
            />
          )}
        </button>
        <p
          className={
            task.isChecked ? styles.taskCompleted : styles.taskNotCompled
          }
        >
          {task.content}
        </p>
      </div>
      <button
        type="button"
        title="Deletar Comentário"
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </div>
  )
}
