import { useState } from 'react';
import styles from './NotasDestacadas.module.css';
import Card from './Card';
import Modal from './Modal';

export const NotasDestacadas = () => {

    const [modalContent, setModalContent] = useState(null);

    const articles = [
        {
            id: 1,
            title: 'Artículo Destacado 1',
            image: 'https://via.placeholder.com/150', // URL de imagen de ejemplo
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
