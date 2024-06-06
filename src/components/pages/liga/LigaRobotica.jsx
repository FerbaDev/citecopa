import { Galeria } from "./Galeria"
import styles from "./Liga.module.css"

export const LigaRobotica = () => {
  return (
    <div className={styles.ligaContainer}>
      <h1>Bienvenido a la Liga Robótica.</h1>
      <Galeria />
    </div>
  )
}
