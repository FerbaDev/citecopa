

export const SeccionFeria = () => {
  return (
    <div className="feria-container">
        <h2 className="neon-text-white">Feria de ciencias y arte itinerante</h2>
        <div className="feria-actions">
            <div>
                <a href="#" className="feria-btn">Participar</a>
            </div>
            <div className="feria-cards-container">
                <button className="feria-card">
                  <img src="/bullseye.svg" alt="" />
                  <p>Temática central</p>
                </button>
                <button className="feria-card">
                <img src="/laptop.svg" alt="" />
                  <p>Desarrollo</p>
                </button>
            </div>
        </div>
    </div>
  )
}
