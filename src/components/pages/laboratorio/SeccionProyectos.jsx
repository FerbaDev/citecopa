import { Link } from "react-router-dom"


const SeccionProyectos = () => {
  return (
    <div className="proyectos-container">
        <h2 className="neon-text-white">Proyectos comunitarios</h2>
        <div className="proyectos-cards-container">
          <Link to={"/proyectos-comunitarios#inclusion-digital"} className="proyectos-card">
            <h3>Inclusión digital</h3>
            <p>...participar plenamente en la sociedad digital...</p>
          </Link>
          <Link to={"/proyectos-comunitarios#tecnologias-sociales"} className="proyectos-card">
            <h3>Tecnologías sociales</h3>
            <p>..tecnología para mejorar la calidad de vida...</p>
          </Link>
          <Link to={"/proyectos-comunitarios#ciencia-ciudadana"} className="proyectos-card">
            <h3>Ciencia ciudadana</h3>
            <p>...fomentamos la participación activa de la comunidad...</p>
          </Link>
        </div>
    </div>
  )
}

export default SeccionProyectos