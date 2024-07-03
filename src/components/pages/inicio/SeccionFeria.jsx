import { Link } from "react-router-dom"


export const SeccionFeria = () => {
  return (
    <div className="feria-container">
        <h2 className="neon-text-white">Feria de ciencias y arte itinerante</h2>
        <div className="feria-actions">
            <div>
                <Link to={"/feria-de-ciencias"} className="feria-btn">Ver más</Link>
            </div>
            <div className="feria-cards-container">
                <Link to={"/feria-de-ciencias"} className="feria-card">
                  <img src="/bullseye.svg" alt="" />
                  <p>Temática central</p>
                </Link>
                <Link to={"/feria-de-ciencias#desarrollo"} className="feria-card">
                <img src="/laptop.svg" alt="" />
                  <p>Desarrollo</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
