import { Comunidad } from "../components/pages/comunidad/Comunidad";
import { Home } from "../components/pages/home/Home";
import { Club } from "../components/pages/club/Club";
import { Laboratorio } from "../components/pages/laboratorio/Laboratorio";
import { LaboratorioDeProyectos } from "../components/pages/laboratorio/LaboratorioDeProyectos";
import Taller from "../components/pages/taller/Taller";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "club",
    path: "/club",
    Element: Club,
  },
  {
    id: "laboratorio",
    path: "/laboratorio",
    Element: Laboratorio,
  },
  {
    id: "comunidad",
    path: "/comunidad",
    Element: Comunidad,
  },
  {
    id: "laboratorioProyectos",
    path: "/laboratorio-de-proyectos-digitales",
    Element: LaboratorioDeProyectos,
  },
  {
    id: "taller",
    path: "/taller",
    Element: Taller,
  },
];
