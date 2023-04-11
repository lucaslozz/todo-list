import './global.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css'
import { TaskContextProvider } from './context/TaskContext'

export function App() {
  return (
    <TaskContextProvider>
      <div className={styles.appContainer}>
        <Header />
        <main>
          <Input />
        </main>
      </div>
    </TaskContextProvider>
  )
}
