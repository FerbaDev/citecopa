import styles from './Colabora.module.css';
import AsociacionPatrocinio from './sections/AsociacionPatrocinio';
import EquiposTecnologicos from './sections/EquiposTecnologicos';
import Materiales from './sections/Materiales';
import ColaboracionesProyectos from './sections/ColaboracionesProyectos';

const Colabora = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Colabora</h1>
            <AsociacionPatrocinio />
            <EquiposTecnologicos />
            <Materiales />
            <ColaboracionesProyectos />
        </div>
    );
};

export default Colabora;
