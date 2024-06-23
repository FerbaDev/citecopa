import { useEffect, useState } from 'react';
import styles from './Nosotros.module.css';



export const Nosotros = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Fetch data from JSONPlaceholder
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                // Limit the data to 5 members and include a random image for each user
                const limitedMembers = data.slice(0, 5).map((member, index) => ({
                    ...member,
                    imageUrl: `https://i.pravatar.cc/150?img=${index + 1}`
                }));
                setTeamMembers(limitedMembers);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <div className={styles.container}>
            <header className={styles.header}>
                <h1>Sobre Nosotros</h1>
                <p>Conoce más sobre nuestra fundación, nuestro equipo, nuestra misión y nuestros valores.</p>
            </header>

            <section className={styles.section}>
                <h2>Equipo Fundador y Junta Directiva</h2>
                <div className={styles.team}>
                    {teamMembers.map(member => (
                        <div key={member.id} className={styles.teamMember}>
                            <img src={member.imageUrl} alt={member.name} className={styles.teamImage} />
                            <h3>{member.name}</h3>
                            <p>{member.email}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2>Historia</h2>
                <p>
                    Aquí puedes agregar un resumen de la historia de la fundación, cómo y por qué fue creada, 
                    los hitos importantes y el impacto que ha tenido hasta ahora.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Misión y Visión</h2>
                <p>
                    Aquí puedes agregar la misión y visión de la fundación, explicando cuál es el objetivo principal 
                    y la meta a largo plazo de la organización.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Transparencia</h2>
                <p>
                    Aquí puedes agregar información sobre las prácticas de transparencia de la fundación, 
                    incluyendo informes financieros, auditorías, y cómo se utilizan los fondos.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Manifiesto</h2>
                <p>
                    Aquí puedes agregar el manifiesto de la fundación, destacando los valores fundamentales y 
                    los principios que guían todas las actividades y decisiones.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Asociados</h2>
                <div className={styles.associates}>
                    {/* Aquí puedes agregar los logos de los asociados */}
                    <img src="associate1.png" alt="Asociado 1" className={styles.associateLogo} />
                    <img src="associate2.png" alt="Asociado 2" className={styles.associateLogo} />
                    <img src="associate3.png" alt="Asociado 3" className={styles.associateLogo} />
                    <p>Descripción breve de cada asociado y su relación con la fundación.</p>
                </div>
            </section>
        </div>
  )
}
