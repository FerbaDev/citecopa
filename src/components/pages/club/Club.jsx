import { Link } from "react-router-dom";
import "./club.css"
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ClubInfo from "./ClubInfo";

export const Club = () => {
  return (
    <>
      <div className="club-container">
        <div className="club-header">
          <h1 className="neon-text-white">Club de ciencias</h1>
          <div className="club-img-header">
            <img src="/man-scientist.svg" alt="" />
            <img src="/scientist.svg" alt="" />
          </div>
        </div>
        <div className="main-club">
        <div className="cta-club-container">
          <div className="card-club-cta">
            <img src="/anotate.svg" alt="" />
            <h2>Anotate!</h2>
            <Link to={"/formulario"}><ArrowCircleRightOutlinedIcon sx={{fontSize:"3em", color: "#212121"}}/></Link>
          </div>
        </div>
        <div className="club-cards-container">
          <Link to={"/club#creatilab"} className="club-card">
            <img src="/creatilab.svg" alt="" />
            <p>Creatilab</p>
          </Link>
          <Link to={"/club#explora-ciencias"} className="club-card">
            <img src="/microscopio.svg" alt="" />
            <p>Explorá ciencias</p>
          </Link>
          <Link to={"/club#tecnoarte"} className="club-card">
            <img src="/tecnoarte.svg" alt="" />
            <p>Tecnoarte</p>
          </Link>
          <Link to={"/club#red-de-clubes"} className="club-card">
            <img src="/red-de-clubes.svg" alt="" />
            <p>Red de clubes</p>
          </Link>
        </div>
        </div>
      </div>
      <ClubInfo />
    </>
  );
};
