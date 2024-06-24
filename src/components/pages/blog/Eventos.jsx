import { Link } from 'react-router-dom';
import styles from './Eventos.module.css';

export const Eventos = () => {
  return (
    <section className={styles.section}>
            <h2 className={styles.title}>Eventos y Calendario de Actividades</h2>
            <p>Próximos eventos y actividades programadas...</p>
            <Link to={"/"} className={styles.btn}>Ver más</Link>
    </section>
  )
}
