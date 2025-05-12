import React from 'react';
import styles from './ReviewsComponent.module.css';

interface Review {
  author: string;
  author_details: {
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
}

interface ReviewsComponentProps {
  reviews: Review[];
}

const ReviewsComponent: React.FC<ReviewsComponentProps> = ({ reviews }) => {
  console.log('Reviews recebidas:', reviews); // Debug log

  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return (
      <div className={styles.reviewsContainer}>
        <p>Nenhum comentário disponível.</p>
      </div>
    );
  }

  const getRatingColor = (rating: number | null) => {
    if (rating === null) return '#666';
    if (rating >= 8) return '#4CAF50';
    if (rating >= 6) return '#FFC107';
    return '#F44336';
  };

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewsGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <h3 className={styles.reviewAuthor}>{review.author}</h3>
              {review.author_details?.rating !== null && (
                <div 
                  className={styles.rating}
                  style={{ color: getRatingColor(review.author_details?.rating) }}
                >
                  {review.author_details?.rating?.toFixed(1)}
                </div>
              )}
            </div>
            <p className={styles.reviewContent}>{review.content}</p>
            <p className={styles.reviewDate}>
              {new Date(review.created_at).toLocaleDateString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponent; 