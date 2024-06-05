import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBlock: "30px",
        }}
      >
        <h1>Dashboard de administrador</h1>
        <Link to={"/miembros"}>
          <Button variant="contained">Ver miembros</Button>
        </Link>
        <Link to={"/contactos"}>
          <Button variant="contained">Ver contactos</Button>
        </Link>
      </header>
    </div>
  );
};

export default Dashboard;
