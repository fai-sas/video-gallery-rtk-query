/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useGetRelatedVideosQuery } from '../../../features/api/apiSlice'
import RelatedVideo from './RelatedVideo'
import RelatedVideoLoader from '../../../components/ui/loaders/RelatedVideoLoader'
import Error from '../../../components/ui/Error'

export default function RelatedVideos({ id, title }) {
  const {
    data: relatedVideos,
    isLoading,
    isError,
  } = useGetRelatedVideosQuery({ id, title })

  let content = null

  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    )
  }

  if (!isLoading && isError) {
    content = <Error message='There was an error occurred' />
  }

  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <Error message='No related videos found' />
  }

  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => {
      return <RelatedVideo key={video.id} video={video} />
    })
  }

  return (
    <div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto rounded-lg'>
      {content}
    </div>
  )
}
