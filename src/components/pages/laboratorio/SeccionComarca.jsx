import { Link } from "react-router-dom";

const SeccionComarca = () => {
  return (
    <div className="comarca-container">
      <div className="comarca-title-container">
        <h2 className="neon-text-white">Comarca Tech</h2>
      </div>
      <div className="comarca-info">
        <div className="comarca-info-item">
          <p>Desafios de diseño</p>
          <div>
            <Link to={"/comarca-tech"} className="btn">
              Ver más
            </Link>
          </div>
        </div>
        <div className="comarca-info-item">
          <p>Hackatones sostenibles</p>
          <div>
            <Link to={"/comarca-tech"} className="btn">
              Ver más
            </Link>
          </div>
        </div>
        <div className="comarca-info-item">
          <p>Gaming y Desarrollos</p>
          <div>
            <Link to={"/comarca-tech"} className="btn">
              Ver más
            </Link>
          </div>
        </div>
        <div className="comarca-info-item">
          <p>Expos y charlas</p>
          <div>
            <Link to={"/comarca-tech"} className="btn">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionComarca;
