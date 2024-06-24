import styles from './Card.module.css';



const Card = ({title, text, image, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
            <img src={image} alt={title} className={styles.image} />
            <h3>{title}</h3>
            <p>{text}</p>
    </div>
  )
}
export default Card;



