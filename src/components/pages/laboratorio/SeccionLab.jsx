import { Link } from "react-router-dom"


export const SeccionLab = () => {
  return (
    <div className="lab-hero-container">
      
      <div className="lab-hero-titles">
        <h1 className="neon-text-white">Laboratorio de proyectos digitales</h1>
        <h3 className="neon-text-pink">Diseño 3d, Apps móviles y web, Gaming y Multimedia</h3>
        <div>
          <Link to={"/laboratorio-de-proyectos-digitales"} className="btn">Ver más</Link>
        </div>
      </div>
      <div className="lab-hero-images">
        <img src="./javascript.svg" alt="" />
      </div>
    </div>
  )
}
