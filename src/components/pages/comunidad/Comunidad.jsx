import ReactWhatsapp from 'react-whatsapp';
import styles from './Comunidad.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from '../../../router/ScrollToTop';

export const Comunidad = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
          const element = document.getElementById(location.hash.slice(1));
          if (element) {
            const offset = 100; // Ajusta este valor según tus necesidades
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
    
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }
      }, [location]); 


  return (
    <div className={styles.container}>
  <ScrollToTop />
  <header className={styles.header}>
    <h1>Comunidad del Club de Ciencias</h1>
    <p>Únete a nuestra comunidad y ayúdanos a inspirar a la próxima generación de científicos y tecnólogos en Viedma, Río Negro, Argentina.</p>
  </header>

  <section className={styles.section} id="colaboradores">
    <h2>Colaboradores</h2>
    <p>
      Nuestro club de ciencias colabora estrechamente con una red de aliados estratégicos, incluyendo empresas, organizaciones sin fines de lucro, instituciones educativas y agencias gubernamentales. Juntos, aportan su experiencia y recursos para potenciar nuestros programas y proyectos, contribuyendo al desarrollo de una comunidad más educada e innovadora.
    </p>
  </section>

  <section className={styles.section} id="voluntarios">
    <h2>Voluntarios</h2>
    <p>
      Los voluntarios son la fuerza vital que impulsa nuestras actividades. Ofrecemos diversas oportunidades de voluntariado, donde podrás compartir tus habilidades y conocimientos, desde la organización de eventos hasta la mentoría de jóvenes científicos. Si te apasiona la ciencia y deseas hacer una diferencia en nuestra comunidad, ¡te invitamos a unirte a nuestro equipo de voluntarios!
    </p>
  </section>

  <section className={styles.section} id="redes">
    <h2>Redes de Apoyo</h2>
    <p>
      Estamos integrados en redes de apoyo que abarcan desde servicios sociales hasta recursos educativos. Estas conexiones nos permiten ofrecer asistencia más amplia y eficaz a nuestros miembros, ayudándonos a crear un impacto significativo en la comunidad. Colaboramos con diversas organizaciones para garantizar que cada persona tenga acceso a los recursos que necesita.
    </p>
  </section>

  <section className={styles.section} id="participacion">
    <h2>Participación Ciudadana</h2>
    <p>
      Fomentamos la participación ciudadana a través de programas que empoderan a la comunidad local. Organizamos mesas de diálogo, grupos de trabajo y consultas populares para involucrar a los ciudadanos en la toma de decisiones que afectan su entorno. Creemos que la ciencia y la tecnología son herramientas poderosas para el cambio social, y queremos que todos sean parte de esta transformación.
    </p>
  </section>

  <section className={styles.section} id="donantes">
    <h2>Donantes y Reconocimientos</h2>
    <p>
      Agradecemos de corazón a nuestros donantes, cuyo apoyo es fundamental para la continuidad de nuestros proyectos. Sus contribuciones, tanto financieras como en especie, nos permiten ofrecer programas de alta calidad sin costo para los participantes. Además, organizamos subastas y aceptamos donaciones de tecnología en desuso, asegurando que cada aporte tenga un impacto duradero.
    </p>
  </section>

  <footer className={styles.footer}>
    <p>Si deseas apoyar nuestro club de ciencias o necesitas más información, por favor contáctanos.</p>
    <button className={styles.ctaButton}>
      <ReactWhatsapp
        number="549-2920-35-4587"
        message="Hola! Quisiera más info sobre la Comunidad del Club de Ciencias!"
        element="div"
      >
        ¡Contáctanos!
      </ReactWhatsapp>
    </button>
  </footer>
</div>

  )
}
