import { Comunidad } from "../components/pages/comunidad/Comunidad";
import { Home } from "../components/pages/home/Home";
import { Club } from "../components/pages/club/Club";
import { Laboratorio } from "../components/pages/laboratorio/Laboratorio";
import { LaboratorioDeProyectos } from "../components/pages/laboratorio/LaboratorioDeProyectos";
import Taller from "../components/pages/taller/Taller";
import Comarca from "../components/pages/comarca/Comarca";
import { LigaRobotica } from "../components/pages/liga/LigaRobotica";
import { FeriaCiencias } from "../components/pages/feria/FeriaCiencias";
import { ProyectosComunitarios } from "../components/pages/proyectos/ProyectosComunitarios";

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
  {
    id: "comarca",
    path: "/comarca-tech",
    Element: Comarca,
  },
  {
    id: "liga",
    path: "/liga-robotica",
    Element: LigaRobotica,
  },
  {
    id: "feria",
    path: "/feria-de-ciencias",
    Element: FeriaCiencias,
  },
  {
    id: "proyectos",
    path: "/proyectos-comunitarios",
    Element: ProyectosComunitarios,
  },
];
