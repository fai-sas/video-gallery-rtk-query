/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link, useNavigate } from 'react-router-dom'
import deleteImage from '../../assets/delete.svg'
import editImage from '../../assets/edit.svg'
import { useDeleteVideoMutation } from '../../features/api/apiSlice'
import Success from '../ui/Success'
import Error from '../ui/Error'
import { useEffect } from 'react'

export default function Description({ video }) {
  const { id, title, description, duration, thumbnail, author, views, date } =
    video

  const navigate = useNavigate()

  const [deleteVideo, { isSuccess, isLoading, isError }] =
    useDeleteVideoMutation()

  const handleDelete = () => {
    if (id) {
      deleteVideo(id)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [navigate, isSuccess])

  return (
    <div>
      <h1 className='text-lg font-semibold tracking-tight text-slate-800'>
        {title}
      </h1>
      <div className='flex items-center gap-4 pb-4 border-b space-between'>
        <h2 className='text-sm leading-[1.7142857] text-slate-600 w-full'>
          Uploaded on {date}
        </h2>

        <div className='flex justify-end w-full gap-6'>
          <div className='flex gap-1'>
            <div className='shrink-0'>
              <img className='block w-5' src={editImage} alt='Edit' />
            </div>
            <Link to={`/videos/edit/${id}`}>
              <span className='text-sm leading-[1.7142857] text-slate-600 cursor-pointer'>
                Edit
              </span>
            </Link>
          </div>
          <div className='flex gap-1 ' onClick={handleDelete}>
            <div className='shrink-0'>
              <img className='block w-5' src={deleteImage} alt='Delete' />
            </div>
            <div className='text-sm leading-[1.7142857] text-slate-600 cursor-pointer'>
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 text-sm text-[#334155] dark:text-slate-400'>
        {description}
      </div>
      {isSuccess && <Success message='Video was deleted successfully' />}
      {!isLoading && isError && (
        <Error message='There was an error deleting video' />
      )}
    </div>
  )
}
