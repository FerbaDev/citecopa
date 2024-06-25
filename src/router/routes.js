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
import Formulario from "../components/pages/formulario/Formulario";
import { Nosotros } from "../components/pages/nosotros/Nosotros";
import { Blog } from "../components/pages/blog/Blog";
import Soluciones from "../components/pages/soluciones/Soluciones";
import Fomento from "../components/pages/fomento/Fomento";
import Colabora from "../components/pages/colabora/Colabora";
import Contacto from "../components/pages/contacto/Contacto";

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
  {
    id: "formulario",
    path: "/formulario",
    Element: Formulario,
  },
  {
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },
  {
    id: "blog",
    path: "/blog",
    Element: Blog,
  },
  {
    id: "soluciones",
    path: "/soluciones",
    Element: Soluciones,
  },
  {
    id: "fomento",
    path: "/fomento",
    Element: Fomento,
  },
  {
    id: "colabora",
    path: "/colabora",
    Element: Colabora,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: Contacto,
  },
];
