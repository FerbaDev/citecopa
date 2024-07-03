import "../../../index.css";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src="/background3.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1 className="neon-text-pink">Fundación CITECoPa</h1>
      </div>
      <div className="buttons-container">
        <Link to="/inicio" className="btn">Inicio</Link>
        <Link to="/club" className="btn">Club de ciencias</Link>
        {/* <Link to="/laboratorio" className="btn">Laboratorio</Link>
        <Link to="/inicio#taller" className="btn">Taller</Link> */}
        <Link to="/comunidad" className="btn">Comunidad</Link>
        <Link to="/blog" className="btn">Blog</Link>
        <Link to="/formulario" className="btn">Anotarme</Link>
      </div>
    </div>
  );
};
