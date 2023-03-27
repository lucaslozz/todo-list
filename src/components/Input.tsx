import styles from "./Input.module.css"

export function Input(){
  return( 
 
      <form className={styles.formContainer}>
        <textarea placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar</button>
      </form>
  )
}