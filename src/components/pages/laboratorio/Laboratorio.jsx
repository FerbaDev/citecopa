import SeccionComarca from "./SeccionComarca";
import { SeccionFeria } from "./SeccionFeria";
import { SeccionLab } from "./SeccionLab";
import SeccionLiga from "./SeccionLiga";
import SeccionProyectos from "./SeccionProyectos";
import { SeccionTaller } from "./SeccionTaller";
import "./laboratorio.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Laboratorio = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  
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
