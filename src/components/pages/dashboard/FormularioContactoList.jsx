import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import styles from "./FormularioContactoList.module.css";

const FormularioContactoList = () => {
    const [formSubmissions, setFormSubmissions] = useState([]);

    useEffect(() => {
        const fetchFormSubmissions = async () => {
            const submissionsCollection = collection(db, "contactoForm");
            const submissionsSnapshot = await getDocs(submissionsCollection);
            const submissionsList = submissionsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFormSubmissions(submissionsList);
        };

        fetchFormSubmissions();
    }, []);

    const deleteSubmission = async (submissionId) => {
        await deleteDoc(doc(db, "contactoForm", submissionId));
        setFormSubmissions(formSubmissions.filter((submission) => submission.id !== submissionId));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Formularios de Contacto</h2>
            <ul className={styles.submissionList}>
                {formSubmissions.map((submission, index) => (
                    <li key={index} className={styles.submissionItem}>
                        <p>
                            <strong>Nombre:</strong> {submission.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {submission.email}
                        </p>
                        <p>
                            <strong>Mensaje:</strong> {submission.message}
                        </p>
                        <div className={styles.buttons}>
                            <button
                                onClick={() => deleteSubmission(submission.id)}
                                className={styles.button}
                            >
                                Borrar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FormularioContactoList;
