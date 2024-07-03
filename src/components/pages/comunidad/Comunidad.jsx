import ReactWhatsapp from 'react-whatsapp';
import styles from './Comunidad.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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
            <header className={styles.header}>
                <h1>Comunidad del Club de Ciencias</h1>
                <p>Únete a nuestra comunidad y ayúdanos a inspirar a la próxima generación de científicos y tecnólogos en Viedma, Río Negro, Argentina.</p>
            </header>

            <section className={styles.section} id='colaboradores'>
                <h2>Colaboradores</h2>
                <p>
                    Nuestro club de ciencias se enorgullece de trabajar con colaboradores comprometidos que aportan su experiencia y recursos 
                    para el desarrollo de nuestros programas. Si deseas colaborar con nosotros, contáctanos para explorar las oportunidades de asociación.
                </p>
            </section>

            <section className={styles.section} id='voluntarios'>
                <h2>Voluntarios</h2>
                <p>
                    Los voluntarios son el corazón de nuestra comunidad. Desde la organización de eventos hasta la tutoría de nuestros jóvenes científicos, 
                    hay muchas maneras de contribuir. Únete como voluntario y marca la diferencia en la vida de los niños y adolescentes.
                </p>
            </section>

            <section className={styles.section} id='redes'>
                <h2>Redes de Apoyo</h2>
                <p>
                    Formamos parte de diversas redes de apoyo que nos ayudan a expandir nuestro impacto. Estas redes incluyen otras organizaciones sin fines de lucro, 
                    instituciones educativas y grupos comunitarios. Juntos, podemos lograr más.
                </p>
            </section>

            <section className={styles.section} id='participacion'>
                <h2>Participación Ciudadana</h2>
                <p>
                    Fomentamos la participación ciudadana a través de proyectos y actividades que involucran a la comunidad local. 
                    Creemos que la ciencia y la tecnología pueden ser herramientas poderosas para el cambio social.
                </p>
            </section>

            <section className={styles.section} id='donantes'>
                <h2>Donantes y Reconocimientos</h2>
                <p>
                    Agradecemos profundamente a nuestros donantes, cuyo apoyo financiero y donaciones en especie hacen posible nuestro trabajo. 
                    Aceptamos donaciones de tecnología en desuso y realizamos subastas para recaudar fondos. Gracias a su generosidad, 
                    podemos seguir ofreciendo nuestros programas sin costo alguno.
                </p>
            </section>

            <footer className={styles.footer}>
                <p>Si deseas apoyar nuestro club de ciencias o necesitas más información, por favor contáctanos.</p>
                <button className={styles.ctaButton}>
                  <ReactWhatsapp
                    number="549-2920-35-4587"
                    message="Hola! Quisiera mas info sobre la Comunidad del club de ciencias!"
                    element="div"
                    
                  >
                    Contactanos!
                  </ReactWhatsapp>
                </button>
            </footer>
        </div>
  )
}
