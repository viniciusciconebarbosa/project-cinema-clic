"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./FeaturedSlider.module.css"
import { Skeleton, Box } from "@mui/material"
import { useState } from "react"

interface FeaturedSliderProps {
  featuredItems: any[]
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ featuredItems = [] }) => {
  const [loading, setLoading] = useState(true)

  if (featuredItems.length === 0) {
    return (
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height="56.25vw" 
        sx={{ 
          maxHeight: '720px',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
        }} 
      />
    )
  }

  return (
    <div className={styles.sliderContainer}>
      {loading && (
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="56.25vw"
          sx={{ 
            maxHeight: '720px',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          }}
        />
      )}
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        useKeyboardArrows={true}
        interval={5000}
        className={styles.carousel}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        {featuredItems.map((item, index) => (
          <Link href={`/details/${item.id}`} key={item.id}>
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h3 className={styles.slideTitle}>{item.title || item.name}</h3>
                <p className={styles.slideOverview}>{item.overview}</p>
              </div>
              <Image
                src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                alt={item.title || item.name}
                width={1280}
                height={720}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={85}
                placeholder="blur"
                blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx4dHx8fHx4eHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
                className={styles.nextImage}
                onLoad={() => {
                  if (index === 0) {
                    setLoading(false)
                  }
                }}
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedSlider

