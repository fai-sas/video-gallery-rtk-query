/* eslint-disable no-unused-vars */
import { useGetVideosQuery } from '../../features/api/apiSlice'
import Video from './Video'
import VideoLoader from '../../components/ui/loaders/VideoLoader'
import Error from '../../components/ui/Error'

export default function Videos() {
  const { data: videos, isLoading, isError } = useGetVideosQuery()

  let content = null

  if (isLoading) {
    content = <VideoLoader />
  }

  if (!isLoading && isError) {
    content = <Error message='There was an error occurred' />
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message='No videos found' />
  }

  if (!isLoading && !isError && videos.length > 0) {
    content = videos?.map((video) => {
      return <Video key={video.id} video={video} />
    })
  }

  return content
}
