import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import styles from "./ContactForm.module.css"; // Importa el módulo CSS
import { Link } from "react-router-dom";
import ScrollToTop from "../../../router/ScrollToTop.jsx";

const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      email: "",
      address: "",
      school: ""
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
      address: Yup.string().required("Domicilio es requerido"),
      school: Yup.string().required("Escuela es requerida"),
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
    <div className={styles.formContainer}>
      <ScrollToTop />
      <div className={styles.formHeader}>
        <h2>Formá parte del <span style={{ fontFamily: "var(--font-orbitron)", color: "yellow" }}>Club de Ciencias</span></h2>
        <p>Dejá tus datos y te contactamos para entrar al club.</p>
      </div>
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
        <div className={styles.field}>
          <label htmlFor="address" className={styles.label}>
            Domicilio
          </label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className={styles.input}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className={styles.error}>{formik.errors.address}</div>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="school" className={styles.label}>
            Escuela
          </label>
          <input
            id="school"
            name="school"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.school}
            className={styles.input}
          />
          {formik.touched.school && formik.errors.school ? (
            <div className={styles.error}>{formik.errors.school}</div>
          ) : null}
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <Link to={-1} className={styles.button}>Volver</Link>
      </div>
    </div>
  );
};

export default Formulario;
