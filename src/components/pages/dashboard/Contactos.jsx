import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import styles from "./Contactos.module.css";

const Contactos = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "contacts");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    await deleteDoc(doc(db, "contacts", userId));
    setUsers(users.filter((user) => user.id !== userId));
  };

  const moveUserToMembers = async (user) => {
    await addDoc(collection(db, "members"), user);
    await deleteDoc(doc(db, "contacts", user.id));
    setUsers(users.filter((u) => u.id !== user.id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Usuarios Inscritos</h2>
      <ul className={styles.userList}>
        {users.map((user, index) => (
          <li key={index} className={styles.userItem}>
            <p>
              <strong>Nombre:</strong> {user.firstName}
            </p>
            <p>
              <strong>Apellido:</strong> {user.lastName}
            </p>
            <p>
              <strong>Edad:</strong> {user.age}
            </p>
            <p>
              <strong>Teléfono:</strong> {user.phone}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <div className={styles.buttons}>
              <button
                onClick={() => deleteUser(user.id)}
                className={styles.button}
              >
                Borrar
              </button>
              <button
                onClick={() => moveUserToMembers(user)}
                className={styles.button}
              >
                Mover a Miembros
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contactos;
