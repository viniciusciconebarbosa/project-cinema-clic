import { getMovieDetails, getMovieImages, getMovieVideos, getTVDetails, getTVImages, getTVVideos } from "@/lib/api"
import DetailPage from "../../../components/DetailPage"

async function fetchMovieData(id: string) {
  const details = await getMovieDetails(id)
  const images = await getMovieImages(id)
  const videos = await getMovieVideos(id)
  return { details, images, videos }
}

async function fetchTVData(id: string) {
  const details = await getTVDetails(id)
  const images = await getTVImages(id)
  const videos = await getTVVideos(id)
  return { details, images, videos }
}

export default async function DetailPageWrapper({ params }: { params: { id: string } }) {
  let data

  try {
    data = await fetchMovieData(params.id)
  } catch (error) {
    data = await fetchTVData(params.id)
  }

  return <DetailPage details={data.details} images={data.images} videos={data.videos} />
}
