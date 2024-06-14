import { useLocation } from 'react-router-dom';
import ScrollToTop from '../../../router/ScrollToTop';
import styles from './FeriaCiencias.module.css';
import ReactWhatsapp from 'react-whatsapp';
import { useEffect } from 'react';


export const FeriaCiencias = () => {

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
                <h1 className={styles.neonTextWhite}>Feria de Ciencias y Arte Itinerante</h1>
                <p>Explora, aprende y participa en nuestra feria dedicada a la ciencia y el arte para niños y adolescentes.</p>
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
              <div className={styles.sectionInfo}>
                <h2 className={styles.neonTextPink}>Temática Central</h2>
                <p>
                    Exploramos diversos temas relacionados con la ciencia y el arte. 
                    Cada evento se centra en un tema específico, como la robótica, la biotecnología, el arte digital, entre otros. 
                    Este espacio está diseñado para inspirar a los jóvenes a explorar y aprender sobre nuevas disciplinas.
                </p>
              </div>
                <img src="ruta-a-imagen-tematica.jpg" alt="Temática Central" className={styles.image}/>
            </section>

            <section className={styles.section2}>
              <div className={styles.sectionInfo}>
                <h2 className={styles.neonTextPink} id='desarrollo'>Desarrollo</h2>
                <p>
                    El área de <strong>Desarrollo</strong> está dedicada a talleres y actividades prácticas donde los participantes 
                    pueden aplicar lo aprendido en proyectos reales. Aquí, los niños y adolescentes podrán trabajar en equipo para 
                    desarrollar sus propias creaciones científicas y artísticas.
                </p>
              </div>
                <img src="ruta-a-imagen-desarrollo.jpg" alt="Desarrollo" className={styles.image}/>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionInfo}>
                <h2 className={styles.neonTextPink}>Participar</h2>
                <p>
                    Invitamos a todos a unirse a nuestra feria. Ya sea como expositor, voluntario o 
                    visitante, hay muchas maneras de involucrarse y contribuir a este evento itinerante. Únete a nosotros y sé parte 
                    de esta emocionante experiencia.
                </p>
              </div>
                <img src="ruta-a-imagen-participar.jpg" alt="Participar" className={styles.image}/>
            </section>
            
            <ReactWhatsapp 
              number="549-2920-35-4587"
              message="Hola! Quisiera participar de la Feria de ciencias!"
              element="div"
              className={styles.glowOnHover}
            >
              Quiero participar
            </ReactWhatsapp>
        </div>
  )
}
