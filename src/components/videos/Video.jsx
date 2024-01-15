import { Link } from 'react-router-dom'
import authorImage from '../../assets/author.png'

export default function Video() {
  return (
    <div className='col-span-12  sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]'>
      <div className='flex flex-col w-full'>
        <div className='relative'>
          <Link to='/videos/1'>
            <img
              src='https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg'
              className='w-full h-auto rounded-md'
              alt='Some video title'
            />
          </Link>

          <p className='absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py'>
            12:10
          </p>
        </div>

        <div className='flex flex-row gap-2 mt-2'>
          <img
            src={authorImage}
            className='w-6 h-6 rounded-full shrink-0'
            alt='Learn with Sumit'
          />

          <div className='flex flex-col'>
            <Link to='/videos/1'>
              <p className='text-sm font-semibold text-slate-900'>
                Video title
              </p>
            </Link>
            <span className='text-xs text-gray-400 hover:text-gray-600'>
              Learn with Sumit
            </span>
            <p className='text-xs text-gray-400'>200 views . May 3, 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}
