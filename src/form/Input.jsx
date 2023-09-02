import styles from './input.module.css'

export default function Input({type, place,id}) {
  return (
    <>
      <label for={id}>{place}:</label>
   <input id={id} className={styles.input} type={type} name="myInput" placeholder={place} size="30" required/>
    </>
  )
}
