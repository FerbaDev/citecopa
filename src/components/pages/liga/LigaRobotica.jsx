import { Link } from "react-router-dom"
import { Galeria } from "./Galeria"
import styles from "./Liga.module.css"
import ReactWhatsapp from "react-whatsapp"
import ScrollToTop from "../../../router/ScrollToTop"

export const LigaRobotica = () => {
  return (
    <div className={styles.container}>
        <ScrollToTop />
      <header className={styles.header}>
          <h1 className={styles.neonTextWhite}>Liga Robótica de la Comarca</h1>
          <p>Únete a nuestra liga y desarrolla tus habilidades en robótica a través de diversas actividades y competencias.</p>
          <div>
                    <ReactWhatsapp
                        number="549-2920-35-4587"
                        message="Hola! Quisiera mas info sobre la Liga Robótica de la Comarca!"
                        element="div"
                        className="cursor-manito btn"
                        >
                        Quiero más info!
                    </ReactWhatsapp>
                </div>
      </header>
      <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSeSclp52N2qt6cKPQG99Y3yjR8LHrLUF-0XJ876ECD2E83Cfg/viewform"} className={styles.glowOnHover}>Ver fechas</Link>
      <section className={styles.section}>
          <h2 className={styles.neonTextPink}>Arma el Tuyo</h2>
          <p>
              Los participantes aprenderán a construir sus propios robots desde cero. 
              Esta área ofrece talleres y recursos para que puedas diseñar y ensamblar tu robot utilizando una variedad 
              de componentes y tecnologías innovadoras.
          </p>
          <img src="ruta-a-imagen-arma-el-tuyo.jpg" alt="Arma el Tuyo" className={styles.image}/>
      </section>

      <section className={styles.section}>
          <h2 className={styles.neonTextPink}>Jugá, Entrená y Competí</h2>
          <p>
              Podrás poner a prueba tus robots en una serie de desafíos y 
              competencias. Participa en entrenamientos y juegos diseñados para mejorar tus habilidades y prepararte 
              para las competencias de la liga.
          </p>
          <img src="ruta-a-imagen-juga-entrena-competi.jpg" alt="Jugá, Entrená y Competí" className={styles.image}/>
      </section>

      <section className={styles.section}>
          <h2 className={styles.neonTextPink}>Fechas y Encuentros</h2>
          <p>
              Mantente al día con nuestro calendario de <strong>Fechas y Encuentros</strong>. Aquí encontrarás información 
              sobre las próximas competencias, talleres y eventos especiales de la Liga Robótica de la Comarca. No te pierdas 
              ninguna oportunidad de participar y demostrar tus habilidades.
          </p>
          <img src="ruta-a-imagen-fechas-encuentros.jpg" alt="Fechas y Encuentros" className={styles.image}/>
      </section>
      <Galeria />
</div>
  )
}
