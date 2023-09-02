import styles from './botao.module.css'

export default function Botao({nome, type}) {
  return (
    <button type={type} className={styles.btn}>{nome}</button>
  )
}
