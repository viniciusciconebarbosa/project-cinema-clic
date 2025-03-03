"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./FeaturedSlider.module.css"

interface FeaturedSliderProps {
  featuredItems: any[]
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ featuredItems = [] }) => {
  if (featuredItems.length === 0) {
    return null // Or you could return a loading state or placeholder
  }

  return (
    <div className={styles.sliderContainer}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className={styles.carousel}
      >
        {featuredItems.map((item) => (
          <Link href={`/details/${item.id}`} key={item.id}>
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h3 className={styles.slideTitle}>{item.title || item.name}</h3>
                <p className={styles.slideOverview}>{item.overview}</p>
              </div>
              <Image
                src={`https://image.tmdb.org/t/p/w1920${item.backdrop_path}`}
                alt={item.title || item.name}
                width={1920}
                height={1080}
                className={styles.nextImage}
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedSlider

