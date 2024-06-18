import { Box } from "@mui/material";
import "../../../index.css";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src="/background3.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1 className="neon-text-pink" style={{ marginBottom: "20px" }}>
          Fundación CITECoPa
        </h1>
        <Box
          sx={{
            display: "flex",
            gap: "1em",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <div>
            <Link to={"/club"} className="btn">
              Club de ciencias
            </Link>
          </div>
          <div>
            <Link to={"/laboratorio"} className="btn">
              Laboratorio
            </Link>
          </div>
          <div>
            <Link to={"/laboratorio#taller"} className="btn">
              Taller
            </Link>
          </div>
          <div>
            <Link to={"/comunidad"} className="btn">
              Comunidad
            </Link>
          </div>
          <div>
            <Link to={"/formulario"} className="btn">
              Anotarme
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
};
