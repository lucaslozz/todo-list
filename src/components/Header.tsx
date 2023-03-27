import styles from "./Header.module.css"
import logo from "../assets/todo.svg"
import rocket from "../assets/rocket.svg"

export function Header(){
  return (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
    <img src={rocket} alt="rocket-logo" />
    <img src={logo} alt="todo-logo" />
    </div></header>);
} 