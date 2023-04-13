import styles from './TaskBoard.module.css'
import { TaskPost } from './TaskPost/TaskPost'
import clipboard from '../../assets/clipboard.svg'
import { TaskContext } from '../../context/TaskContext'
import { useContext } from 'react'

export function TaskBoard() {
  const { allTasks } = useContext(TaskContext)

  const completedTask = allTasks.reduce((acc, item) => {
    if (item.isChecked === true) {
      acc++
    }
    return acc
  }, 0)

  return (
    <article className={styles.boardContainer}>
      <header>
        <strong className={styles.createdTask}>
          Tarefas criadas <span>{allTasks.length}</span>
        </strong>
        <strong className={styles.completedTask}>
          Concluídas{' '}
          <span>
            {completedTask
              ? `${completedTask} de ${allTasks.length}`
              : completedTask}
          </span>
        </strong>
      </header>
      <main className={styles.taskPostContainer}>
        {allTasks.length === 0 && (
          <div className={styles.taskBoardeEmptyContainer}>
            <img src={clipboard} alt="ClipBoard" />
            <div className={styles.infoEmpty}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}

        {allTasks.map((task) => {
          return <TaskPost key={task.id} task={task} />
        })}
      </main>
    </article>
  )
}
