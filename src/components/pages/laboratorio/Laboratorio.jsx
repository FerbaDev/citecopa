import SeccionComarca from "./SeccionComarca";
import { SeccionLab } from "./SeccionLab";
import { SeccionTaller } from "./SeccionTaller";
import "./laboratorio.css";

export const Laboratorio = () => {
  return (
    <div>
      <SeccionLab />
      <SeccionTaller />
      <SeccionComarca />
    </div>
  );
};
