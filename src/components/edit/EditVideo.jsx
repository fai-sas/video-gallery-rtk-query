/* eslint-disable no-unused-vars */

import { useParams } from 'react-router-dom'
import Form from './Form'
import { useGetSingleVideoQuery } from '../../features/api/apiSlice'
import Error from '../ui/Error'

export default function EditVideo() {
  const { videoId } = useParams()
  const { data: video, isLoading, isError } = useGetSingleVideoQuery(videoId)

  let content = null

  if (isLoading) {
    content = <h1>Loading...</h1>
  }

  if (!isLoading && isError) {
    content = <Error message='There was an error occurred' />
  }

  if (!isLoading && !isError && video?.id) {
    content = <Form video={video} />
  }

  return (
    <div className='px-5 mx-auto max-w-7xl lg:px-0'>
      <div className='w-full'>
        <div className='px-4 pb-4 sm:px-0'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Edit video
          </h3>
          <p className='mt-1 text-sm text-gray-600'>
            Please fill up the form to edit video
          </p>
        </div>
        <div className='mt-5 md:mt-0 md:col-span-2'>{content}</div>
      </div>
    </div>
  )
}
