import { Link } from "react-router-dom"

const SeccionLiga = () => {
  return (
    <div className="liga-container">
        <div className="liga-header">
            <h2 className="neon-text-white">Liga Robótica de la Comarca</h2>
            <div style={{marginBottom: "50px"}}>
            <Link to="/liga-robotica" className="glow-on-hover2">Participar</Link>
            </div>
        </div>
        <div className="liga-cards-container">
            <Link to={"/liga-robotica/#arma-el-tuyo"} className="liga-card liga-card-1 neon-text-pink">
                    <h3>Armá el tuyo</h3>
            </Link>
            <Link to={"/liga-robotica#juga-entrena-competi"} className="liga-card liga-card-2 neon-text-pink">
                <h3>Jugá, entrená y competí</h3>
            </Link>
            <Link to={"/liga-robotica#fechas"} className="liga-card liga-card-3 neon-text-pink" style={{cursor: "point"}}>
                <h3>Fechas y encuentros</h3>
            </Link>
        </div>
    </div>
  )
}

export default SeccionLiga