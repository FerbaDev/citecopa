export const SeccionTaller = () => {
  return (
    <div className="taller-container">
      <div className="taller-title">
        <h3 className="neon-text-white">Taller de construcciones digitales</h3>
        <img src="/laptop-img.png" alt="" />
      </div>
      <div className="taller-info">
        <div>
          <h5 className="taller-info-title">Prototipado asistido</h5>
          <p>
            Fabricación digital: Impresoras 3d, Scaner 3D para Smart Factory,
            Fabricación avanzada con diseño disruptivo, Router CNC, Corte Láser
            y tornería.
          </p>
        </div>
        <div>
          <h5 className="taller-info-title">Robótica, automatismos, IOT</h5>
          <p>
            Internet de las cosas: aplicaciones de control, protocolos y
            entornos funcionales.
          </p>
        </div>
        <div>
          <h5 className="taller-info-title">Electrónica práctica aplicada</h5>
          <p>
            Diseño y desarrollo. Sensorialidad activa. Placas de control.
            Microcontroladores. Software y aplicaciones embebidas.
          </p>
        </div>
        <div>
          <h5 className="taller-info-title">Sustentabilidad en accion</h5>
          <p>
            Energías Renovables, Reducción de Residuos, Reciclaje y
            Restauraciones, Iniciativas Sostenibles, Agricultura Sostenible,
            Walipini, Tecnologías Verdes, Productos Ecológicos y Biodinámicos.
          </p>
        </div>
        <div>
          <button className="glow-on-hover">Sumarme al taller!</button>
        </div>
      </div>
    </div>
  );
};
