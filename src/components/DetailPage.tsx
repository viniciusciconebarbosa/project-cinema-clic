"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./DetailPage.module.css"

interface DetailPageProps {
  details: any
  images: any
  videos: any
}

const DetailPage: React.FC<DetailPageProps> = ({ details, images, videos }) => {
  const isMovie = details.title !== undefined

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{details.title || details.name}</h1>

      <div className={styles.mainContent}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title || details.name}
          width={300}
          height={450}
          className={styles.poster}
        />
        <div className={styles.info}>
          <p className={styles.overview}>{details.overview}</p>
          <p>
            <strong>Data de Lançamento:</strong> {details.release_date || details.first_air_date}
          </p>
          <p>
            <strong>Avaliação:</strong> {details.vote_average.toFixed(1)}/10
          </p>
          <p>
            <strong>Gêneros:</strong> {details.genres.map((genre: any) => genre.name).join(", ")}
          </p>
          {isMovie ? (
            <p>
              <strong>Duração:</strong> {Math.floor(details.runtime / 60)}h {details.runtime % 60}min
            </p>
          ) : (
            <p>
              <strong>Número de Temporadas:</strong> {details.number_of_seasons}
            </p>
          )}
          <p>
            <strong>Status:</strong> {details.status}
          </p>
          {details.production_companies && details.production_companies.length > 0 && (
            <p>
              <strong>Produtoras:</strong> {details.production_companies.map((company: any) => company.name).join(", ")}
            </p>
          )}
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Elenco Principal</h2>
      <div className={styles.castGrid}>
        {details.credits.cast.slice(0, 6).map((actor: any) => (
          <div key={actor.id} className={styles.castMember}>
            <Image
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : "/placeholder.svg"}
              alt={actor.name}
              width={100}
              height={150}
              className={styles.actorImage}
            />
            <p className={styles.actorName}>{actor.name}</p>
            <p className={styles.characterName}>{actor.character}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Galeria</h2>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} className={styles.carousel}>
        {images.backdrops.slice(0, 10).map((image: any, index: number) => (
          <div key={index}>
            <Image
              src={`https://image.tmdb.org/t/p/w1920${image.file_path}`}
              alt={`Backdrop ${index + 1}`}
              width={1280}
              height={720}
              layout="responsive"
            />
          </div>
        ))}
      </Carousel>

      {videos.results.length > 0 && (
        <>
          <h2 className={styles.sectionTitle}>Trailers</h2>
          <div className={styles.trailers}>
            {videos.results.slice(0, 3).map((video: any) => (
              <iframe
                key={video.id}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.trailer}
              ></iframe>
            ))}
          </div>
        </>
      )}

      <h2 className={styles.sectionTitle}>{isMovie ? "Filmes Relacionados" : "Séries Relacionadas"}</h2>
      <div className={styles.relatedGrid}>
        {details.similar.results.slice(0, 6).map((item: any) => (
          <Link href={`/details/${item.id}`} key={item.id} className={styles.relatedItem}>
            <Image
              src={item.poster_path ? `https://image.tmdb.org/t/p/w185${item.poster_path}` : "/placeholder.svg"}
              alt={item.title || item.name}
              width={100}
              height={150}
              className={styles.relatedImage}
            />
            <p className={styles.relatedTitle}>{item.title || item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DetailPage

