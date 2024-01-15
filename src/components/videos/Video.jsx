/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import authorImage from '../../assets/author.png'

export default function Video({ video }) {
  console.log(video)
  const { id, title, duration, thumbnail, author, views, date } = video
  return (
    <div className='col-span-12  sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]'>
      <div className='flex flex-col w-full'>
        <div className='relative'>
          <Link to={`/videos/${id}`}>
            <img
              src={thumbnail}
              className='w-full h-auto rounded-md'
              alt={title}
            />
          </Link>

          <p className='absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py'>
            {duration}
          </p>
        </div>

        <div className='flex flex-row gap-2 mt-2'>
          <img
            src={authorImage}
            className='w-6 h-6 rounded-full shrink-0'
            alt={author}
          />

          <div className='flex flex-col'>
            <Link to='/videos/1'>
              <p className='text-sm font-semibold text-slate-900'>{title}</p>
            </Link>
            <span className='text-xs text-gray-400 hover:text-gray-600'>
              {author}
            </span>
            <p className='text-xs text-gray-400'>
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
