import { ArticulosEspecializados } from './ArticulosEspecializados';
import { Biblioteca } from './Biblioteca';
import styles from './Blog.module.css';
import { Eventos } from './Eventos';
import { Foro } from './Foro';
import { NotasDestacadas } from './NotasDestacadas';
import { Recomendaciones } from './Recomendaciones';
import { Tendencias } from './Tendencias';
import { Tutoriales } from './Tutoriales';

export const Blog = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Blog Citecopa</h1>
            <Eventos />
            <NotasDestacadas />
            <Tendencias />
            <ArticulosEspecializados />
            <Foro />
            <Biblioteca />
            <Tutoriales />
            <Recomendaciones />
        </div>
    );
}
