import { Comunidad } from "../components/pages/comunidad/Comunidad";
import { Home } from "../components/pages/home/Home";
import { Club } from "../components/pages/inicio/Club";
import { Laboratorio } from "../components/pages/laboratorio/Laboratorio";

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
];
