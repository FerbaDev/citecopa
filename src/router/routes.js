import { Home } from "../components/pages/home/Home";

import { Inicio } from "../components/pages/inicio/Inicio";

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
];
