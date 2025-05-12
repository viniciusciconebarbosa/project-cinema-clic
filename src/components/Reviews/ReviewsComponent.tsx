"use client";
import React, { useState } from 'react';
import styles from './ReviewsComponent.module.css';
import { Box, Typography, Paper, Avatar, Rating, Divider } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import StarIcon from '@mui/icons-material/Star';
import TranslateIcon from '@mui/icons-material/Translate';
import { IconButton, Tooltip, CircularProgress } from '@mui/material';

interface Review {
  author: string;
  author_details: {
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
}

interface ReviewsComponentProps {
  reviews: Review[];
}

const ReviewsComponent: React.FC<ReviewsComponentProps> = ({ reviews }) => {
  const [translatedReviews, setTranslatedReviews] = useState<{ [key: string]: string }>({});
  const [isTranslating, setIsTranslating] = useState<{ [key: string]: boolean }>({});

  const translateText = async (text: string, reviewId: string) => {
    if (translatedReviews[reviewId]) {
      // Se já temos a tradução, alternamos entre original e traduzido
      setTranslatedReviews(prev => {
        const newState = { ...prev };
        delete newState[reviewId];
        return newState;
      });
      return;
    }

    setIsTranslating(prev => ({ ...prev, [reviewId]: true }));

    try {
      // Dividir o texto em partes menores se necessário (limite da API é 500 caracteres)
      const textParts = text.match(/.{1,500}/g) || [text];
      let translatedText = '';

      for (const part of textParts) {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(part)}&langpair=en|pt`
        );

        const data = await response.json();
        if (data.responseStatus === 200 && data.responseData.translatedText) {
          translatedText += data.responseData.translatedText + ' ';
        } else {
          throw new Error('Erro na tradução');
        }

        // Aguardar um pouco entre as requisições para não sobrecarregar a API
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setTranslatedReviews(prev => ({
        ...prev,
        [reviewId]: translatedText.trim()
      }));
    } catch (error) {
      console.error('Erro ao traduzir:', error);
    } finally {
      setIsTranslating(prev => ({ ...prev, [reviewId]: false }));
    }
  };

  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return (
      <div className={styles.reviewsContainer}>
        <p className={styles.reviewsTitle}>Nenhum comentário disponível.</p>
      </div>
    );
  }

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewsGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <h3 className={styles.reviewAuthor}>{review.author}</h3>
              {review.author_details?.rating && (
                <div className={styles.rating}>
                  <Rating
                    value={review.author_details.rating / 2}
                    precision={0.5}
                    readOnly
                    icon={<StarIcon sx={{ color: '#F6E27A' }} />}
                    emptyIcon={<StarIcon sx={{ color: 'grey.500' }} />}
                  />
                </div>
              )}
            </div>
            <div className={styles.reviewContent}>
              <p>{translatedReviews[index] || review.content}</p>
              <div className={styles.translateButtonContainer}>
                <Tooltip title={translatedReviews[index] ? "Ver texto original" : "Traduzir para português"}>
                  <IconButton 
                    onClick={() => translateText(review.content, index.toString())}
                    disabled={isTranslating[index]}
                    sx={{ 
                      color: '#F6E27A',
                      '&:hover': { color: '#CB9B51' }
                    }}
                  >
                    <TranslateIcon />
                  </IconButton>
                </Tooltip>
                {isTranslating[index] && (
                  <CircularProgress 
                    size={16} 
                    sx={{ 
                      color: '#F6E27A',
                      position: 'absolute',
                      bottom: -20,
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }} 
                  />
                )}
              </div>
            </div>
            <p className={styles.reviewDate}>
              {new Date(review.created_at).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponent; 