import styles from './Fomento.module.css';
import IncorporacionTecnologias from './sections/IncorporacionTecnologias';
import FabricacionReparacion from './sections/FabricacionReparacion';
import AsistenciasCapacitaciones from './sections/AsistenciasCapacitaciones';
import PromocionAsesoramiento from './sections/PromocionAsesoramiento';
import AlianzasIncubadoras from './sections/AlianzasIncubadoras';
import AcompanamientoEventos from './sections/AcompanamientoEventos';

const Fomento = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Fomento</h1>
            <IncorporacionTecnologias />
            <FabricacionReparacion />
            <AsistenciasCapacitaciones />
            <PromocionAsesoramiento />
            <AlianzasIncubadoras />
            <AcompanamientoEventos />
        </div>
    );
};

export default Fomento;
