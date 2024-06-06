import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import { Button } from "@mui/material";
import { MiembrosList } from "./MiembrosList";

export const Miembros = () => {
  const [members, setMembers] = useState([]);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setIsChange(false);
    let membersCollection = collection(db, "members");
    getDocs(membersCollection).then((res) => {
      const newArr = res.docs.map((member) => {
        return {
          ...member.data(),
          id: member.id,
        };
      });
      setMembers(newArr);
    });
  }, [isChange]);

  return (
    <div >
      <header style={{ display: "flex", justifyContent: "space-around", paddingTop: "20px" }}>
        <h1>Miembros de la asociacion</h1>
        <Link to={-1}>
          <Button variant="contained">Volver</Button>
        </Link>
      </header>
      <MiembrosList members={members} setIsChange={setIsChange} />
    </div>
  );
};