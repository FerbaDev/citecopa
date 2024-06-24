import styles from './Card.module.css';



const Card = ({onClick, title, text}) => {
  return (
    <div className={styles.card} onClick={onClick}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
  )
}
export default Card;



