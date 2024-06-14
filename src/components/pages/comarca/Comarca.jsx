import ReactWhatsapp from 'react-whatsapp';
import styles from './Comarca.module.css';
import ScrollToTop from '../../../router/ScrollToTop';

const Comarca = () => {
  return (
    <div className={styles.container}>
        <ScrollToTop />
            <header className={styles.header}>
                <h1 className={styles.neonTextWhite}>Comarca Tech</h1>
                <p>Explora, aprende y diviértete con nuestras actividades tecnológicas para niños y adolescentes.</p>
                <div>
                    <ReactWhatsapp
                        number="549-2920-35-4587"
                        message="Hola! Quisiera mas info sobre la Comarca Tech!"
                        element="div"
                        className="cursor-manito btn"
                        >
                        Quiero más info!
                    </ReactWhatsapp>
                </div>
            </header>

            <section className={styles.section}>
                <h2 className={styles.neonTextPink}>Desafíos de Diseño y Construcciones Tecnológicas</h2>
                <p>
                    Participa en nuestros <strong>Desafíos de Diseño y Construcciones Tecnológicas</strong> donde 
                    los participantes podrán desarrollar sus habilidades creativas y técnicas. Desde el diseño de estructuras 
                    innovadoras hasta la construcción de prototipos funcionales, este espacio fomenta la inventiva y el pensamiento crítico.
                </p>
                <img src="ruta-a-imagen-desafios.jpg" alt="Desafíos de Diseño" className={styles.image}/>
            </section>

            <section className={styles.section}>
                <h2 className={styles.neonTextPink}>Hackatón de Diseños Sostenibles</h2>
                <p>
                    Únete a nuestra <strong>Hackatón de Diseños Sostenibles</strong> y trabaja en equipo para crear soluciones 
                    tecnológicas que promuevan la sostenibilidad. Esta área se enfoca en el desarrollo de proyectos que minimicen 
                    el impacto ambiental y fomenten prácticas ecológicas.
                </p>
                <img src="ruta-a-imagen-hackaton.jpg" alt="Hackatón de Diseños" className={styles.image}/>
            </section>

            <section className={styles.section}>
                <h2 className={styles.neonTextPink}>Gaming y Desarrollos</h2>
                <p>
                    En el área de <strong>Gaming y Desarrollos</strong>, los participantes podrán explorar el mundo de los videojuegos, 
                    desde la conceptualización y diseño hasta el desarrollo y la implementación. Aprenderán a crear experiencias 
                    interactivas y a utilizar herramientas de desarrollo de juegos.
                </p>
                <img src="ruta-a-imagen-gaming.jpg" alt="Gaming y Desarrollos" className={styles.image}/>
            </section>

            <section className={styles.section}>
                <h2 className={styles.neonTextPink}>Expo y Charlas</h2>
                <p>
                    Asiste a nuestra <strong>Expo y Charlas</strong> donde podrás ver las presentaciones de proyectos innovadores 
                    y participar en charlas impartidas por expertos en tecnología. Este espacio es ideal para aprender, compartir ideas 
                    y conocer las últimas tendencias en el mundo tecnológico.
                </p>
                <img src="ruta-a-imagen-expo.jpg" alt="Expo y Charlas" className={styles.image}/>
            </section>
        </div>
  )
}

export default Comarca