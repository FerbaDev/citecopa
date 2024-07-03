import { Link } from "react-router-dom";
import styles from './SeccionComunidad.module.css';
import ScrollToTop from "../../../router/ScrollToTop";


const SeccionComunidad = () => {





  return (
    <div className={styles.comunidadContainer}>
        <ScrollToTop />
        <div className={styles.comunidadHeader}>
            <h2 className="neon-text-white">Comunidad del Club de Ciencias</h2>
            <div style={{marginBottom: "50px"}}>
                <Link to="/comunidad" className="glow-on-hover2">Únete</Link>
            </div>
        </div>
        <div className={styles.comunidadCardsContainer}>
            <Link to="/comunidad/#colaboradores" className={`${styles.comunidadCard} ${styles.comunidadCard1}`}>
                <h3>Colaboradores</h3>
            </Link>
            <Link to="/comunidad/#voluntarios" className={`${styles.comunidadCard} ${styles.comunidadCard2}`}>
                <h3>Voluntarios</h3>
            </Link>
            <Link to="/comunidad/#redes" className={`${styles.comunidadCard} ${styles.comunidadCard3}`}>
                <h3>Redes de Apoyo</h3>
            </Link>
            <Link to="/comunidad/#participacion" className={`${styles.comunidadCard} ${styles.comunidadCard4}`}>
                <h3>Participación Ciudadana</h3>
            </Link>
            <Link to="/comunidad/#donantes" className={`${styles.comunidadCard} ${styles.comunidadCard5}`}>
                <h3>Donantes y Reconocimientos</h3>
            </Link>
        </div>
    </div>
  )
}

export default SeccionComunidad