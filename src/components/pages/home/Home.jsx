import { Button } from "@mui/material";
import "../../../index.css";
import { Link } from "react-router-dom";

export const Home = () => {
  
  return (
    <div className="background home">
      <h1>CITECoPa</h1>
      <Link to={"/inicio"}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#616161",
            ":hover": { backgroundColor: "#757575" },
          }}
        >
          ir a la app
        </Button>
      </Link>
    </div>
  );
};
