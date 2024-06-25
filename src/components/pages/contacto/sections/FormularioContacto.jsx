import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import styles from "./FormularioContacto.module.css"; // Importa el módulo CSS

const FormularioContacto = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Nombre es requerido"),
            email: Yup.string()
                .email("Email no es válido")
                .required("Email es requerido"),
            message: Yup.string().required("Mensaje es requerido"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await addDoc(collection(db, "contactoForm"), values);
                alert("Formulario enviado con éxito");
                resetForm();
            } catch (error) {
                console.error("Error al enviar el formulario: ", error);
            }
        },
    });

    return (
        <section className={styles.section}>
            <h2>Formulario de contacto</h2>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className={styles.error}>{formik.errors.name}</div>
                    ) : null}
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={styles.error}>{formik.errors.email}</div>
                    ) : null}
                </label>
                <label>
                    Mensaje:
                    <textarea
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className={styles.error}>{formik.errors.message}</div>
                    ) : null}
                </label>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default FormularioContacto;
