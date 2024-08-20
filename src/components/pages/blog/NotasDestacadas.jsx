import { useState } from 'react';
import styles from './NotasDestacadas.module.css';
import Card from './Card';
import Modal from './Modal';

export const NotasDestacadas = () => {

    const [modalContent, setModalContent] = useState(null);

    const articles = [
        {
            id: 1,
            title: 'Río Negro le da una nueva vida a la basura electrónica',
            image: 'https://firebasestorage.googleapis.com/v0/b/citecopa-fcac8.appspot.com/o/imagenes%2Flg.jpg?alt=media&token=a46a52dc-daeb-4584-877b-b636365ad011', // URL de imagen de ejemplo
            text: 'Este es el texto del artículo destacado 1... ver más...',
            fullText: 'Este es el texto completo del artículo destacado 1.'
        },
        {
            id: 2,
            title: 'Artículo Destacado 2',
            image: 'https://via.placeholder.com/150', // URL de imagen de ejemplo
            text: 'Este es el texto del artículo destacado 2... ver más...',
            fullText: 'Este es el texto completo del artículo destacado 2.'
        },
        {
            id: 3,
            title: 'Artículo Destacado 3',
            image: 'https://via.placeholder.com/150', // URL de imagen de ejemplo
            text: 'Este es el texto del artículo destacado 3... ver más...',
            fullText: 'Este es el texto completo del artículo destacado 3.'
        }
    ];

    const openModal = (article) => {
        setModalContent(article);
    };

    const closeModal = () => {
        setModalContent(null);
    };

  return (
    <section className={styles.section}>
            <h2 className={styles.title}>Notas Destacadas</h2>
            <div className={styles.articles}>
                {articles.map(article => (
                    <Card
                        key={article.id}
                        title={article.title}
                        text={article.text}
                        onClick={() => openModal(article)}
                    />
                ))}
            </div>
            {modalContent && 
                <Modal 
                    title={modalContent.title} 
                    image={modalContent.image} 
                    content={modalContent.fullText} 
                    onClose={closeModal} 
                />}
        </section>
  )
}
