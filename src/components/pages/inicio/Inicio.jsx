import {  Box } from "@mui/material";
import "./inicio.css"

import "../../../index.css";
import ClubSeccion from "./ClubSeccion";
import LabSeccion from "./LabSeccion";
import { TallerSeccion } from "./TallerSeccion";

export const Inicio = () => {
  return (
    <Box  >
      <ClubSeccion />
      <LabSeccion />
      <TallerSeccion />
    </Box>
  );
};
