import { Link } from 'react-router-dom';
import styles from './ClubInfo.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClubInfo = () => {
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
        <h1 className='neon-text-white'>Club de Ciencias</h1>
        <p className='neon-text-pink'>Únete a nuestro Club de Ciencias y descubre el fascinante mundo de la ciencia y la tecnología.</p>
        <Link to={"/formulario"} className={styles.ctaButton}>Unirme Ahora</Link>
      </header>

      <section className={styles.section} id='explora-ciencias'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Explora Ciencias</h2>
          <p>
            Desarrollo de talleres prácticos donde los participantes puedan realizar experimentos científicos en temas como <strong>física, química, biología, robótica</strong>, etc. 
            Estos talleres pueden ser impartidos por expertos en la materia o por miembros destacados del club.
          </p>
        </div>
        <img src="" alt="Explora Ciencias" className={styles.image} />
      </section>

      <section className={styles.section2} id='creatilab'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>CreatiLab</h2>
          <p>
            Fomento de proyectos de investigación dirigidos por los miembros del club, donde puedan explorar y profundizar en temas de su interés. 
            Estos proyectos pueden abarcar desde estudios científicos básicos hasta investigaciones más avanzadas en colaboración con instituciones académicas.
          </p>
        </div>
        <img src="" alt="CreatiLab" className={styles.image} />
      </section>

      <section className={styles.section} id='tecnoarte'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Innova y Tecno Arte</h2>
          <p>
            Organización de charlas y conferencias con científicos destacados, investigadores y profesionales del campo, donde se puedan abordar temas de actualidad y 
            compartir conocimientos especializados con los miembros del club y la comunidad en general.
          </p>
        </div>
        <img src="" alt="Innova y Tecno Arte" className={styles.image} />
      </section>

      <section className={styles.section2} id='red-de-clubes'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Red de Clubes</h2>
          <p>
            Participación en competencias científicas a nivel local, nacional e internacional, donde los miembros del club puedan poner a prueba sus habilidades y 
            conocimientos en diferentes áreas científicas y tecnológicas.
          </p>
        </div>
        <img src="" alt="Red de Clubes" className={styles.image} />
      </section>

      <section className={styles.section} id='espacio-de-ideas'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Espacio de Ideas</h2>
          <div className={styles.subSection}>
            <h3 className='neon-text-yellow'>Proponé</h3>
            <p>
              Organización de excursiones y visitas a laboratorios, centros de investigación, museos de ciencia y tecnología, y otras instituciones relacionadas, 
              para que los miembros del club puedan conocer de cerca el trabajo científico y tecnológico en acción.
            </p>
          </div>
          <div className={styles.subSection}>
            <h3 className='neon-text-yellow'>Descubrí</h3>
            <p>
              Estímulo a la producción de contenido científico y tecnológico, como artículos, blogs, vídeos y presentaciones, para compartir los resultados de 
              investigaciones y experiencias del club con la comunidad en línea.
            </p>
          </div>
          <div className={styles.subSection}>
            <h3 className='neon-text-yellow'>Investigá</h3>
            <p>
              Ofrecimiento de programas de mentoría y tutorías, donde los miembros más experimentados del club puedan guiar y apoyar a los nuevos integrantes en 
              su desarrollo científico y tecnológico.
            </p>
          </div>
        </div>
        <img src="/espacio-de-ideas.webp" alt="Espacio de Ideas" className={styles.image} />
      </section>

      <section className={styles.section2} id='ferias-de-ciencias'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Ferias de Ciencias</h2>
          <p>
            Organización de ferias de ciencias anuales o semestrales, donde los miembros del club puedan exhibir y presentar sus proyectos e investigaciones ante un 
            público más amplio y recibir retroalimentación de expertos en el campo.
          </p>
        </div>
        <img src="" alt="Ferias de Ciencias" className={styles.image} />
      </section>

      <div className={styles.btnCont}>
        <Link to={"/formulario"} className={styles.ctaButton}>Unirme Ahora</Link>
      </div>
    </div>
  );
};

export default ClubInfo;
