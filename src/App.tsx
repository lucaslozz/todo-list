import "./global.css"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import styles from "./App.module.css"

export function App() {
  return (
    <div className={styles.appContainer} >
      <Header />
      <main>
        <Input />
      </main>
    </div>

  )
}

