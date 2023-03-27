import styles from "./App.module.css"
import "./global.css"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { TaskBoard } from "./components/TaskBoard"


export function App() {
  return (
    <div>
      <Header/>
    <main>
      <Input/>
      <TaskBoard />
    </main>
    </div>
  
  )
}

