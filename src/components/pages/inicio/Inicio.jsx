import {  Box } from "@mui/material";
import "./inicio.css"

import "../../../index.css";
import ClubSeccion from "./ClubSeccion";
import LabSeccion from "./LabSeccion";

export const Inicio = () => {
  return (
    <Box className="inicio-container" >
      <ClubSeccion />
      <LabSeccion />
    </Box>
  );
};
