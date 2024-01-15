import { Link } from 'react-router-dom'

export default function RelatedVideo() {
  return (
    <div className='flex flex-row w-full gap-2 mb-4'>
      <div className='relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]'>
        <Link to='/videos/1'>
          <img
            src='https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg'
            className='object-cover'
            alt='Some video title'
          />
        </Link>
        <p className='absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py'>
          12:10
        </p>
      </div>

      <div className='flex flex-col w-full'>
        <Link to='/videos/1'>
          <p className='text-sm font-semibold text-slate-900'>
            Some video title
          </p>
        </Link>
        <span className='mt-2 text-xs text-gray-400 hover:text-gray-600'>
          Learn with Sumit
        </span>
        <p className='mt-1 text-xs text-gray-400'>100K views . 23 Oct 2022</p>
      </div>
    </div>
  )
}
