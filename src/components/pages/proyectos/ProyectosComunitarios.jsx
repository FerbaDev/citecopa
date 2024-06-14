import ReactWhatsapp from "react-whatsapp";
import styles from "./ProyectosComunitarios.module.css";
import ScrollToTop from "../../../router/ScrollToTop";

export const ProyectosComunitarios = () => {
  return (
    <div className={styles.container}>
      <ScrollToTop />
      <header className={styles.header}>
        <h1 className={styles.neonTextWhite}>Proyectos Comunitarios</h1>
        <p>
          Descubre nuestras iniciativas tecnológicas diseñadas para fomentar la
          participación y el desarrollo comunitario.
        </p>
        <div>
          <ReactWhatsapp
            number="549-2920-35-4587"
            message="Hola! Quisiera mas info sobre la Feria de Ciencias!"
            element="div"
            className="cursor-manito btn"
          >
            Quiero más info!
          </ReactWhatsapp>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Inclusión Digital</h2>
        <p>
          En <strong>Inclusión Digital</strong>, trabajamos para cerrar la
          brecha digital proporcionando acceso a tecnologías y habilidades
          digitales. A través de talleres y programas educativos, capacitamos a
          niños y adolescentes para que puedan participar plenamente en la
          sociedad digital.
        </p>
        <img
          src="ruta-a-imagen-inclusion-digital.jpg"
          alt="Inclusión Digital"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Tecnologías Sociales</h2>
        <p>
          Nuestra área de <strong>Tecnologías Sociales</strong> se enfoca en el
          desarrollo de soluciones tecnológicas que abordan problemas sociales.
          Desde aplicaciones móviles que facilitan el acceso a servicios hasta
          plataformas que promueven la colaboración comunitaria, utilizamos la
          tecnología para mejorar la calidad de vida de las personas.
        </p>
        <img
          src="ruta-a-imagen-tecnologias-sociales.jpg"
          alt="Tecnologías Sociales"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Ciencia Ciudadana</h2>
        <p>
          En <strong>Ciencia Ciudadana</strong>, fomentamos la participación
          activa de la comunidad en proyectos científicos. Los participantes
          pueden contribuir a la recolección y análisis de datos, ayudando a los
          investigadores a resolver problemas locales y globales. Esta área
          promueve el aprendizaje colaborativo y la conciencia científica.
        </p>
        <img
          src="ruta-a-imagen-ciencia-ciudadana.jpg"
          alt="Ciencia Ciudadana"
          className={styles.image}
        />
      </section>
    </div>
  );
};
