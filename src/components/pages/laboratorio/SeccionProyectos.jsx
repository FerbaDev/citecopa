import { Link } from "react-router-dom"


const SeccionProyectos = () => {
  return (
    <div className="proyectos-container">
        <h2 className="neon-text-white">Proyectos comunitarios</h2>
        <div className="proyectos-cards-container">
          <Link to={"/proyectos-comunitarios"} className="proyectos-card">
            <h3>Inclusión digital</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum id alias corporis tenetur ducimus!</p>
          </Link>
          <div className="proyectos-card">
            <h3>Tecnologías sociales</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum id alias corporis tenetur ducimus!</p>
          </div>
          <div className="proyectos-card">
            <h3>Ciencia ciudadana</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum id alias corporis tenetur ducimus!</p>
          </div>
        </div>
    </div>
  )
}

export default SeccionProyectos