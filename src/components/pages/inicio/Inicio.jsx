import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../index.css";

export const Inicio = () => {
  return (
    <Box className="inicio-container" sx={{paddingInline: {xs: "20px", md:"50px", lg: "50px"}}}>
      <h1>Muy pronto!</h1>
      <p>Este sitio se está construyendo</p>
      <Link to={-1}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#616161",
            ":hover": { backgroundColor: "#757575" },
          }}
        >
          volver
        </Button>
      </Link>
    </Box>
  );
};
