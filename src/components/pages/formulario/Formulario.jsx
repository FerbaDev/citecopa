import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import styles from "./ContactForm.module.css"; // Importa el módulo CSS

const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Nombre es requerido"),
      lastName: Yup.string().required("Apellido es requerido"),
      age: Yup.number()
        .required("Edad es requerida")
        .positive("Edad debe ser positiva")
        .integer("Edad debe ser un número entero"),
      phone: Yup.string()
        .required("Teléfono es requerido")
        .matches(/^[0-9]{10}$/, "Teléfono debe tener 10 dígitos"),
      email: Yup.string()
        .email("Email no es válido")
        .required("Email es requerido"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await addDoc(collection(db, "contacts"), values);
        alert("Formulario enviado con éxito");
        resetForm();
      } catch (error) {
        console.error("Error al enviar el formulario: ", error);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>
            Nombre
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={styles.input}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className={styles.error}>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>
            Apellido
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className={styles.input}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className={styles.error}>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="age" className={styles.label}>
            Edad
          </label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            className={styles.input}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className={styles.error}>{formik.errors.age}</div>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className={styles.input}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className={styles.error}>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={styles.input}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
