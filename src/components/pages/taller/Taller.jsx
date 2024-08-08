import ReactWhatsapp from "react-whatsapp";
import ScrollToTop from "../../../router/ScrollToTop";
import styles from "./Taller.module.css";

const Taller = () => {
  return (
    <div className={styles.container}>
      <ScrollToTop />
      <header className={styles.header}>
        <h1 className={styles.neonTextWhite}>
          Taller de Construcciones Digitales
        </h1>
        <p>
          Participa en nuestras actividades tecnológicas diseñadas para niños y
          adolescentes.
        </p>
        <div>
          <ReactWhatsapp
            number="549-2920-35-4587"
            message="Hola! Quisiera más info sobre el Taller de Construcciones Digitales!"
            element="div"
            className="cursor-manito btn"
          >
            ¡Quiero más info!
          </ReactWhatsapp>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <h2 className={styles.neonTextPink}>Prototipado Asistido</h2>
          <p>
            En el área de <strong>Prototipado Asistido</strong>, los participantes aprenderán sobre <strong>Prototipado y Diseño 3D</strong> mediante talleres sobre diseño asistido por computadora (CAD) y modelado 3D. Aprenderán a diseñar y crear prototipos digitales de productos y dispositivos utilizando software especializado, y podrán utilizar <strong>impresoras 3D</strong> para fabricar prototipos físicos. Además, se explorarán conceptos de <strong>fabricación digital</strong> y tecnologías de la <strong>Industria 4.0</strong>, como la <strong>fabricación CNC</strong> y la <strong>realidad aumentada en la producción</strong>.
          </p>
        </div>
        <img
          src="prototipado-asistido.webp"
          alt="Prototipado Asistido"
          className={styles.image}
        />
      </section>

      <section className={styles.section2}>
        <div className={styles.sectionInfo}>
          <h2 className={styles.neonTextPink}>Robótica, Automatismos e IoT</h2>
          <p>
            El área de <strong>Robótica, Automatismos e IoT</strong> se centra en talleres de <strong>Automatización y Robótica</strong> donde los participantes aprenderán a diseñar, construir y programar robots y sistemas automatizados utilizando kits de robótica y plataformas de desarrollo. Se abordarán temas como la visión artificial, el control de movimiento y la interacción humano-robot. También se realizarán talleres sobre <strong>Internet de las Cosas (IoT)</strong>, donde los participantes aprenderán a diseñar y desarrollar dispositivos conectados a internet que interactúen entre sí y con el entorno físico, utilizando sensores, actuadores, microcontroladores y plataformas de IoT.
          </p>
        </div>
        <img
          src="internet-dlc.webp"
          alt="Robótica e IoT"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <h2 className={styles.neonTextPink}>Electrónica Práctica Aplicada</h2>
          <p>
            En el área de <strong>Electrónica Práctica Aplicada</strong>, los estudiantes aprenderán sobre <strong>Talleres de Programación y Desarrollo de Software</strong>, donde podrán aprender a programar y desarrollar software utilizando diferentes lenguajes de programación y herramientas de desarrollo, así como la programación de microcontroladores. Además, se explorarán temas de <strong>Seguridad Informática y Ciberseguridad</strong>, enseñando a los participantes sobre las amenazas y vulnerabilidades en el mundo digital y cómo proteger sistemas y datos contra ataques cibernéticos. Se incluirán talleres sobre <strong>Realidad Virtual (VR) y Realidad Aumentada (AR)</strong>, donde los participantes aprenderán a desarrollar aplicaciones y experiencias inmersivas utilizando tecnologías de VR y AR.
          </p>
        </div>
        <img
          src="electronica-aplicada.webp"
          alt="Electrónica Práctica"
          className={styles.image}
        />
      </section>

      <section className={styles.section2}>
        <div className={styles.sectionInfo}>
          <h2 className={styles.neonTextPink}>Sustentabilidad en Acción</h2>
          <p>
            El área de <strong>Sustentabilidad en Acción</strong> fomenta el uso de <strong>energías renovables</strong>, la <strong>reducción de residuos</strong> y <strong>reciclados y restauraciones</strong>. Se promueven <strong>iniciativas sostenibles</strong> en <strong>agricultura sostenible</strong> y <strong>tecnologías verdes</strong> para crear <strong>productos ecológicos y biodinámicos</strong>. También se explorarán tecnologías emergentes como <strong>blockchain y criptomonedas</strong>, donde los participantes aprenderán sobre los fundamentos de la tecnología blockchain, su aplicación en diferentes industrias y el funcionamiento de las criptomonedas como Bitcoin y Ethereum.
          </p>
        </div>
        <img
          src="sustentabilidad-en-accion.webp"
          alt="Sustentabilidad"
          className={styles.image}
        />
      </section>
    </div>
  );
};

export default Taller;
