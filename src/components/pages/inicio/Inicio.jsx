import {  Box } from "@mui/material";

import "../../../index.css";
import ClubSeccion from "./ClubSeccion";

export const Inicio = () => {
  return (
    <Box className="inicio-container" sx={{paddingInline: {xs: "20px", md:"50px", lg: "50px"}}}>
      <ClubSeccion />

    </Box>
  );
};
