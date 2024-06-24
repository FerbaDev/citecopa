import styles from './Modal.module.css';

const Modal = ({ content, onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <p>{content}</p>
            </div>
        </div>
  )
}
export default Modal;