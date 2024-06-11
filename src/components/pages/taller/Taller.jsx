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
              message="Hola! Quisiera mas info sobre el Taller de Construcciones Digitales!"
              element="div"
              className="cursor-manito btn"
            >
              Quiero más info!
          </ReactWhatsapp>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Prototipado Asistido</h2>
        <p>
          En el área de <strong>Prototipado Asistido</strong>, los participantes
          explorarán la <strong>fabricación digital </strong>
          utilizando <strong>impresoras 3D</strong>,{" "}
          <strong>smart factory</strong> y <strong>scanners 3D</strong>.
          Aprenderán sobre <strong>fabricación avanzada</strong>,{" "}
          <strong>diseño disruptivo</strong>, el uso de{" "}
          <strong>rutters CNC</strong>,<strong> laser cutting</strong> y{" "}
          <strong>tornería</strong>.
        </p>
        <img
          src="ruta-a-imagen-prototipado.jpg"
          alt="Prototipado Asistido"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Robótica, Automatismos e IoT</h2>
        <p>
          El área de <strong>Robótica, Automatismos e IoT</strong> se centra en
          el <strong>Internet de las cosas</strong>,
          <strong>aplicaciones de control</strong>,{" "}
          <strong>protocolos y entornos</strong> y diversas{" "}
          <strong>funcionalidades</strong>.
        </p>
        <img
          src="ruta-a-imagen-robotica.jpg"
          alt="Robótica e IoT"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Electrónica Práctica Aplicada</h2>
        <p>
          En el área de <strong>Electrónica Práctica Aplicada</strong>, los
          estudiantes aprenderán sobre <strong>diseño y desarrollo</strong>, el
          uso de <strong>sensores y actuadores</strong>,{" "}
          <strong>placas de control</strong>,{" "}
          <strong>microcontroladores</strong>,<strong>software y apps</strong> y{" "}
          <strong>sistemas embebidos</strong>.
        </p>
        <img
          src="ruta-a-imagen-electronica.jpg"
          alt="Electrónica Práctica"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Sustentabilidad en Acción</h2>
        <p>
          El área de <strong>Sustentabilidad en Acción</strong> fomenta el uso
          de <strong>energías renovables</strong>, la{" "}
          <strong>reducción de residuos</strong> y{" "}
          <strong>reciclados y restauraciones</strong>. Se promueven
          <strong> iniciativas sostenibles</strong> en{" "}
          <strong>agricultura sostenible</strong> y{" "}
          <strong>tecnologías verdes </strong>
          para crear <strong>productos ecológicos y biodinámicos</strong>.
        </p>
        <img
          src="ruta-a-imagen-sustentabilidad.jpg"
          alt="Sustentabilidad"
          className={styles.image}
        />
      </section>
    </div>
  );
};

export default Taller;
