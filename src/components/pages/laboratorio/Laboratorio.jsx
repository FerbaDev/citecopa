import SeccionComarca from "./SeccionComarca";
import { SeccionLab } from "./SeccionLab";
import SeccionLiga from "./SeccionLiga";
import { SeccionTaller } from "./SeccionTaller";
import "./laboratorio.css";

export const Laboratorio = () => {
  return (
    <div>
      <SeccionLab />
      <SeccionTaller />
      <SeccionComarca />
      <SeccionLiga />
    </div>
  );
};
