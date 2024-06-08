import styles from './ClubInfo.module.css';

const ClubInfo = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Club de Ciencias</h1>
                <p>Únete a nuestro Club de Ciencias y descubre el fascinante mundo de la ciencia y la tecnología.</p>
                <button className={styles.ctaButton}>Únete Ahora</button>
            </header>

            <section className={styles.section}>
                <h2>Explora Ciencias</h2>
                <p>
                    Podrás aprender sobre <strong>ciencias naturales, conservación de especies, 
                    biodiversidad digital, biotecnologías, astronomía y ciencias exactas (física, química, matemáticas)</strong>. 
                    Descubre los <strong>ecosistemas y acciones ambientales</strong> y explora las <strong>historias de las ciencias </strong> 
                    de manera divertida e interactiva.
                </p>
                <img src="ruta-a-imagen-explora-ciencias.jpg" alt="Explora Ciencias" className={styles.image}/>
            </section>

            <section className={styles.section}>
                <h2>CreatiLab</h2>
                <p>
                    En el <strong>CreatiLab</strong>, podrás experimentar con <strong>inteligencia artificial, realidad virtual y aumentada, 
                    gaming y experimentos de ciencia viva</strong>. Construye <strong>artilugios tecnológicos</strong> y participa en 
                    emocionantes <strong>construcciones</strong> que te harán sentir como un verdadero científico.
                </p>
                <img src="ruta-a-imagen-creatilab.jpg" alt="CreatiLab" className={styles.image}/>
            </section>

            <section className={styles.section}>
                <h2>Innova y Tecno Arte</h2>
                <p>
                    En <strong>Innova y Tecno Arte</strong>, podrás explorar el mundo de la <strong>música e iluminación</strong>, 
                    y el <strong>diseño de artículos de moda</strong>. Descubre el arte del <strong>upcycling</strong> y participa en 
                    investigaciones para <strong>descubrir nuevas propuestas</strong>.
                </p>
                <img src="ruta-a-imagen-innova-tecno-arte.jpg" alt="Innova y Tecno Arte" className={styles.image}/>
            </section>

            <section className={styles.section}>
                <h2>Red de Clubes</h2>
                <p>
                    Con la <strong>Red de Clubes</strong>, te ayudamos a <strong>armar tu club en la escuela o en tu barrio</strong>. 
                    Nosotros te apoyamos para que puedas crear tu propio espacio de ciencia y tecnología donde quiera que estés.
                </p>
                <img src="ruta-a-imagen-red-de-clubes.jpg" alt="Red de Clubes" className={styles.image}/>
            </section>
        </div>
    );
};

export default ClubInfo;