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
            Podrás aprender sobre <strong>ciencias naturales, conservación de especies, 
            biodiversidad digital, biotecnologías, astronomía y ciencias exactas (física, química, matemáticas)</strong>. 
            Descubre los <strong>ecosistemas y acciones ambientales</strong> y explora las <strong>historias de las ciencias </strong> 
            de manera divertida e interactiva.
          </p>
        </div>
        <img src="/img-club-de-ciencias1.webp" alt="Explora Ciencias" className={styles.image} />
      </section>

      <section className={styles.section2} id='creatilab'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>CreatiLab</h2>
          <p>
            En el <strong>CreatiLab</strong>, podrás experimentar con <strong>inteligencia artificial, realidad virtual y aumentada, 
            gaming y experimentos de ciencia viva</strong>. Construye <strong>artilugios tecnológicos</strong> y participa en 
            emocionantes <strong>construcciones</strong> que te harán sentir como un verdadero científico.
          </p>
        </div>
        <img src="/creatilab2.webp" alt="CreatiLab" className={styles.image} />
      </section>

      <section className={styles.section} id='tecnoarte'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Innova y Tecno Arte</h2>
          <p>
            En <strong>Innova y Tecno Arte</strong>, podrás explorar el mundo de la <strong>música e iluminación</strong>, 
            y el <strong>diseño de artículos de moda</strong>. Descubre el arte del <strong>upcycling</strong> y participa en 
            investigaciones para <strong>descubrir nuevas propuestas</strong>.
          </p>
        </div>
        <img src="/tecnoarte.webp" alt="Innova y Tecno Arte" className={styles.image} />
      </section>

      <section className={styles.section2} id='red-de-clubes'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Red de Clubes</h2>
          <p>
            Con la <strong>Red de Clubes</strong>, te ayudamos a <strong>armar tu club en la escuela o en tu barrio</strong>. 
            Nosotros te apoyamos para que puedas crear tu propio espacio de ciencia y tecnología donde quiera que estés.
          </p>
        </div>
        <img src="/red-de-clubes2.webp" alt="Red de Clubes" className={styles.image} />
      </section>

      <section className={styles.section} id='espacio-de-ideas'>
        <div className={styles.sectionInfo}>
          <h2 className='neon-text-pink'>Espacio de Ideas</h2>
          <div className={styles.subSection}>
            <h3 className='neon-text-yellow'>Proponé</h3>
            <p>
              Aporta tus ideas y proyectos innovadores. Comparte tus propuestas y trabaja en conjunto con otros miembros del club para hacerlas realidad.
            </p>
          </div>
          <div className={styles.subSection}>
            <h3 className='neon-text-yellow'>Descubrí</h3>
            <p>
              Explora nuevas áreas del conocimiento y descubre cómo puedes aplicar la ciencia y la tecnología para resolver problemas reales.
            </p>
          </div>
          <div className={styles.subSection}>
            <h3 className='neon-text-yellow'>Investigá</h3>
            <p>
              Participa en proyectos de investigación y desarrolla tus habilidades científicas. Colabora con otros miembros para llevar a cabo estudios y experimentos.
            </p>
          </div>
        </div>
        <img src="/espacio-de-ideas.webp" alt="Espacio de Ideas" className={styles.image} />
      </section>

      <div className={styles.btnCont}>
        <Link to={"/formulario"} className={styles.ctaButton}>Unirme Ahora</Link>
      </div>
    </div>
  );
};

export default ClubInfo;
