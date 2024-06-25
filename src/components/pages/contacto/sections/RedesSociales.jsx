import styles from './RedesSociales.module.css';

const RedesSociales = () => {
    return (
        <section className={styles.section}>
            <h2>Redes sociales</h2>
            <p>Síguenos en nuestras redes sociales para estar al tanto de todas nuestras novedades y eventos.</p>
            <ul className={styles.socialLinks}>
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://twitter.com">Twitter</a></li>
                <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
        </section>
    );
};

export default RedesSociales;
