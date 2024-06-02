import SeccionComarca from "./SeccionComarca";
import { SeccionFeria } from "./SeccionFeria";
import { SeccionLab } from "./SeccionLab";
import SeccionLiga from "./SeccionLiga";
import SeccionProyectos from "./SeccionProyectos";
import { SeccionTaller } from "./SeccionTaller";
import "./laboratorio.css";

export const Laboratorio = () => {
  return (
    <>
      <SeccionLab />
      <SeccionTaller />
      <SeccionComarca />
      <SeccionLiga />
      <SeccionFeria />
      <SeccionProyectos />
    </>
  );
};
