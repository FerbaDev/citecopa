import styles from './Modal.module.css';

const Modal = ({ title, image, content, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <h2>{title}</h2>
                {image && <img src={image} alt={title} className={styles.image} />}
                <p>{content}</p>
            </div>
      </div>
  )
}
export default Modal;