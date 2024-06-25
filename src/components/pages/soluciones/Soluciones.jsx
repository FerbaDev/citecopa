import styles from './Soluciones.module.css';
import Mercado from './Mercado';
import ArticulosArteIluminacion from './ArticulosArteIluminacion';
import Upcycling from './Upcycling';
import TalleresCursos from './TalleresCursos';
import Biotecnologias from './Biotecnologias';
import AparatosRestaurados from './AparatosRestaurados';
import SubastasSolidarias from './SubastasSolidarias';
import CentroReciclaje from './CentroReciclaje';
import ProductosEcologicos from './ProductosEcologicos';
import ProyectosAutomatizaciones from './ProyectosAutomatizaciones';

const Soluciones = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Soluciones</h1>
            <Mercado />
            <ArticulosArteIluminacion />
            <Upcycling />
            <TalleresCursos />
            <Biotecnologias />
            <AparatosRestaurados />
            <SubastasSolidarias />
            <CentroReciclaje />
            <ProductosEcologicos />
            <ProyectosAutomatizaciones />
        </div>
    );
};

export default Soluciones;
