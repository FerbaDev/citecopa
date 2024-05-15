import { Box, Button } from "@mui/material";
import "../../../index.css";
import { Link } from "react-router-dom";

export const Home = () => {
  
  return (
    <div className="home">
      <h1>Fundación CITECoPa</h1>
      <Box sx={{ display: "flex", gap: "1em"}}>
        <Link to={"/inicio"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              ":hover": { backgroundColor: "blue" },
            }}
          >
            inicio
          </Button>
        </Link>
        <Link to={"/laboratorio"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              ":hover": { backgroundColor: "blue" },
            }}
          >
            laboratorio
          </Button>
        </Link>
        <Link to={"/comunidad"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              ":hover": { backgroundColor: "blue" },
            }}
          >
            comunidad
          </Button>
        </Link>
      </Box>
    </div>
  );
};
