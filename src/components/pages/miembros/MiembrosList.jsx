import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const MiembrosList = ({ members, setIsChange }) => {
  const deleteMember = (id) => {
    deleteDoc(doc(db, "members", id));
    setIsChange(true);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nombre completo</TableCell>
              <TableCell align="left">Teléfono</TableCell>
              <TableCell align="left">Membresía</TableCell>
              <TableCell align="left">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow
                key={member.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {member.nombre} {member.apellido}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {member.phone}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {member.membresia}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <IconButton onClick={() => deleteMember(member.id)}>
                    <DeleteForeverIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};