import styles from './Contacto.module.css';
import QuieroParticipar from './sections/QuieroParticipar';
import FormularioContacto from './sections/FormularioContacto';
import RedesSociales from './sections/RedesSociales';
import PreguntasFrecuentes from './sections/PreguntasFrecuentes';
import Ubicacion from './sections/Ubicacion';
import ScrollToTop from '../../../router/ScrollToTop';

const Contacto = () => {
    return (
        <div className={styles.container}>
            <ScrollToTop />
            <h1 className={styles.title}>Contacto</h1>
            <QuieroParticipar />
            <FormularioContacto />
            <RedesSociales />
            <PreguntasFrecuentes />
            <Ubicacion />
        </div>
    );
};

export default Contacto;
