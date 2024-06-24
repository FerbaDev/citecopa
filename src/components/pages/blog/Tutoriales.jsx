
import styles from './Tutoriales.module.css';



export const Tutoriales = () => {

    const pdfs = [
        { name: 'Guía de Introducción a la Programación', url: 'https://example.com/intro-programacion.pdf' },
        { name: 'Manual de Desarrollo Web', url: 'https://example.com/desarrollo-web.pdf' },
        { name: 'Tutorial de React', url: 'https://example.com/tutorial-react.pdf' },
        { name: 'Guía de Machine Learning', url: 'https://example.com/machine-learning.pdf' },
    ];


    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Tutoriales y Guías</h2>
            <p>Descarga tutoriales y guías en PDF para aprender más:</p>
            <ul className={styles.pdfList}>
                {pdfs.map((pdf, index) => (
                    <li key={index} className={styles.pdfItem}>
                        <a href={pdf.url} download className={styles.pdfLink}>{pdf.name}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};


