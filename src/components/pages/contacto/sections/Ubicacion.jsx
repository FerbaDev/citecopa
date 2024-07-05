import styles from './Section.module.css';

const Ubicacion = () => {
    return (
        <section className={styles.section}>
            <h2>Ubicación</h2>
            <p>Nos encontramos en calle Italia 401 ¨b¨, Viedma, Río Negro, Argentina. Visítanos en nuestra sede para conocer más sobre nuestras actividades.</p>
            <div className={styles.mapContainer}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.716834105229!2d-63.0078713!3d-40.81221589999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95f699007c683ce5%3A0x54dfe90ab3031f29!2sFundaci%C3%B3n%20Citecopa!5e0!3m2!1ses-419!2sar!4v1720222397310!5m2!1ses-419!2sar" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowfullscreen="" 
                    loading="lazy"
                    className={styles.map}
                    ></iframe>
            </div>
        </section>
    );
};

export default Ubicacion;
