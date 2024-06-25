import styles from './Section.module.css';

const Ubicacion = () => {
    return (
        <section className={styles.section}>
            <h2>Ubicación</h2>
            <p>Nos encontramos en calle Italia 401 ¨b¨, Viedma, Río Negro, Argentina. Visítanos en nuestra sede para conocer más sobre nuestras actividades.</p>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.7170201929225!2d-63.01044622413677!3d-40.812211811282445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95f69804033feb7b%3A0x9c548ba25036f745!2sItalia%20401%2C%20R8500API%20Viedma%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1719290131969!5m2!1ses-419!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className={styles.map}
                ></iframe>
            </div>
        </section>
    );
};

export default Ubicacion;
