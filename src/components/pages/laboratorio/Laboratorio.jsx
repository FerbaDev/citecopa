import ReactWhatsapp from "react-whatsapp";
import styles from "./LaboratorioDP.module.css";
import ScrollToTop from "../../../router/ScrollToTop";

export const Laboratorio = () => {
  return (
<div className={styles.container}>
      <ScrollToTop />
      <header className={styles.header}>
        <h1 className={styles.neonTextWhite}>Laboratorio de Proyectos Digitales</h1>
        <p>Explora, crea y aprende con nuestras actividades tecnológicas.</p>
        <div>
          <ReactWhatsapp
            number="549-2920-35-4587"
            message="Hola! Quisiera más info sobre el Laboratorio de Proyectos Digitales!"
            element="div"
            className="cursor-manito btn"
          >
            ¡Quiero más info!
          </ReactWhatsapp>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <h2 className={styles.neonTextPink}>Diseño 3D</h2>
          <p>
            Capacitación en <strong>diseño web</strong> y desarrollo frontend, donde los participantes puedan aprender a crear sitios web modernos y atractivos utilizando tecnologías como <strong>HTML, CSS y JavaScript</strong>. Se pueden ofrecer cursos básicos y avanzados según el nivel de experiencia de los participantes.
            <br />
            Además, se ofrecen talleres y cursos para aprender a <strong>desarrollar videojuegos</strong> utilizando motores de juego populares como <strong>Unity o Unreal Engine</strong>. Los participantes pueden aprender a programar mecánicas de juego, diseñar niveles y crear gráficos y sonidos para sus juegos.
            <br />
            Talleres de <strong>programación para robots y drones</strong>, donde los participantes pueden aprender a programar y controlar dispositivos robóticos y vehículos aéreos no tripulados. Se pueden explorar temas como la <strong>inteligencia artificial</strong>, la visión por computadora y el control de movimiento.
          </p>
        </div>
        <img src="diseño-3d.webp" alt="Diseño 3D" className={styles.image} />
      </section>

      <section className={styles.section2}>
        <div className={styles.sectionInfo}> 
          <h2 className={styles.neonTextPink}>Aplicaciones Móviles y Web</h2>
          <p>
            Ofrecimiento de cursos y talleres para aprender a desarrollar aplicaciones móviles en diferentes plataformas, como <strong>iOS y Android</strong>. Los participantes pueden aprender a programar, diseñar interfaces de usuario y lanzar sus propias aplicaciones.
            <br />
            En el espacio de <strong>Aplicaciones Móviles y Web</strong> se ofrece formación en <strong>diseño gráfico</strong> y <strong>desarrollo web</strong>. Los estudiantes aprenderán sobre <strong>específicas de datos y control</strong> para crear aplicaciones útiles y efectivas.
            <br />
            Capacitación en desarrollo de aplicaciones de <strong>realidad virtual (VR)</strong> y <strong>realidad aumentada (AR)</strong>, donde los participantes puedan aprender a crear experiencias inmersivas y interactivas utilizando tecnologías como <strong>Oculus Rift, HTC Vive, Microsoft HoloLens</strong>, etc.
          </p>
        </div>
        <img src="aplicaciones-moviles.webp" alt="Aplicaciones Móviles y Web" className={styles.image} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <h2 className={styles.neonTextPink}>Gaming y Multimedia</h2>
          <p>
            El área de <strong>Gaming y Multimedia</strong> está diseñada para enseñar <strong>arte y guiones</strong>, así como <strong>diseño y desarrollo</strong> de juegos. Los participantes explorarán <strong>herramientas de gamificación</strong>, <strong>mapping</strong>, <strong>edición de video</strong> y <strong>stop motion</strong> para crear experiencias multimedia completas.
            <br />
            Talleres y cursos introductorios a la <strong>inteligencia artificial (IA)</strong> y el <strong>aprendizaje automático (machine learning)</strong>, donde los participantes puedan aprender los conceptos básicos y aplicarlos en proyectos prácticos como reconocimiento de imágenes, procesamiento de lenguaje natural, etc.
            <br />
            Organización de <strong>hackatones</strong> y desafíos digitales donde los participantes puedan poner en práctica sus habilidades en un entorno colaborativo y creativo. Se pueden proponer desafíos específicos relacionados con temas de actualidad o problemas sociales.
            <br />
            Fomento de la participación en proyectos de <strong>código abierto</strong> donde los participantes puedan contribuir al desarrollo de software de uso público. Se pueden organizar eventos de colaboración y proporcionar orientación y recursos para los participantes.
          </p>
        </div>
        <img src="gaming.webp" alt="Gaming y Multimedia" className={styles.image} />
      </section>
    </div>
  );
};
