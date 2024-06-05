import { Box, Button } from "@mui/material";
import "../../../index.css";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="neon-text-pink">Fundación CITECoPa</h1>
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Link to={"/club"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              ":hover": { backgroundColor: "blue" },
            }}
          >
            Club de ciencias
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
        <Link to={"/laboratorio#taller"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              ":hover": { backgroundColor: "blue" },
            }}
          >
            Taller
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
        <Link to={"/formulario"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              ":hover": { backgroundColor: "blue" },
            }}
          >
            Anotarme
          </Button>
        </Link>
      </Box>
    </div>
  );
};
