import { PlusCircle } from "@phosphor-icons/react"
import styles from "./Input.module.css"

export function Input(){
  return( 
 
      <form className={styles.formContainer}>
        <textarea placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar <PlusCircle size={16} weight="bold"/></button>
      </form>
  )
}