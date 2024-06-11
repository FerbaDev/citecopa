import ReactWhatsapp from "react-whatsapp";
import styles from "./LaboratorioDP.module.css";

export const LaboratorioDeProyectos = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.neonTextWhite}>
          Laboratorio de Proyectos Digitales
        </h1>
        <p>Explora, crea y aprende con nuestras actividades tecnológicas.</p>
        <div>
          <ReactWhatsapp
              number="549-2920-35-4587"
              message="Hola! Quisiera mas info sobre el Laboratorio de Proyectos Digitales!"
              element="div"
              className="cursor-manito btn"
            >
              Quiero más info!
          </ReactWhatsapp>
        </div>
        
      </header>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Diseño 3D</h2>
        <p>
          En nuestro laboratorio de <strong>Diseño 3D</strong>, los
          participantes aprenderán sobre
          <strong> software y apps</strong>, el uso de{" "}
          <strong>laminadores</strong> y<strong> control numérico</strong>.
          También explorarán la{" "}
          <strong>inteligencia artificial aplicada al diseño 3D</strong> para
          crear proyectos innovadores.
        </p>
        <img
          src="ruta-a-imagen-diseno-3d.jpg"
          alt="Diseño 3D"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Aplicaciones Móviles y Web</h2>
        <p>
          Nuestro espacio de <strong>Aplicaciones Móviles y Web</strong> ofrece
          formación en <strong>diseño gráfico</strong>y{" "}
          <strong>desarrollo web</strong>. Los estudiantes aprenderán sobre{" "}
          <strong>específicas de datos y control</strong>
          para crear aplicaciones útiles y efectivas.
        </p>
        <img
          src="ruta-a-imagen-aplicaciones-moviles-web.jpg"
          alt="Aplicaciones Móviles y Web"
          className={styles.image}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.neonTextPink}>Gaming y Multimedia</h2>
        <p>
          El área de <strong>Gaming y Multimedia</strong> está diseñada para
          enseñar <strong>arte y guiones</strong>, así como
          <strong> diseño y desarrollo</strong> de juegos. Los participantes
          explorarán
          <strong> herramientas de gamificación</strong>,
          <strong> mapping</strong>, <strong>edición de video</strong> y{" "}
          <strong>stop motion</strong> para crear experiencias multimedia
          completas.
        </p>
        <img
          src="ruta-a-imagen-gaming-multimedia.jpg"
          alt="Gaming y Multimedia"
          className={styles.image}
        />
      </section>
    </div>
  );
};
