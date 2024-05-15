import { Comunidad } from "../components/pages/comunidad/Comunidad";
import { Home } from "../components/pages/home/Home";

import { Inicio } from "../components/pages/inicio/Inicio";
import { Laboratorio } from "../components/pages/laboratorio/Laboratorio";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "inicio",
    path: "/inicio",
    Element: Inicio,
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
];
