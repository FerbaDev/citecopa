import styles from './FormularioContacto.module.css';

const FormularioContacto = () => {
    return (
        <section className={styles.section}>
            <h2>Formulario de contacto</h2>
            <form className={styles.form}>
                <label>
                    Nombre:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default FormularioContacto;
