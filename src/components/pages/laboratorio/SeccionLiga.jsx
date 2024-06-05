import { Link } from "react-router-dom"

const SeccionLiga = () => {
  return (
    <div className="liga-container">
        <div className="liga-header">
            <h2 className="neon-text-white">Liga Robótica de la Comarca</h2>
            <div>
            <Link to="/liga-robotica" className="glow-on-hover2">Participar</Link>
            </div>
        </div>
        <div className="liga-cards-container">
            <div className="liga-card liga-card-1 neon-text-pink">
                <h3>Armá el tuyo</h3>
            </div>
            <div className="liga-card liga-card-2 neon-text-pink">
                <h3>Jugá, entrená y competí</h3>
            </div>
            <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSeSclp52N2qt6cKPQG99Y3yjR8LHrLUF-0XJ876ECD2E83Cfg/viewform"} className="liga-card liga-card-3 neon-text-pink" style={{cursor: "point"}}>
                <h3>Fechas y encuentros</h3>
            </Link>
        </div>
    </div>
  )
}

export default SeccionLiga