/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import TextArea from '../ui/TextArea'
import TextInput from '../ui/TextInput'
import Success from '../ui/Success'
import Error from '../ui/Error'
import { useEditVideoMutation } from '../../features/api/apiSlice'

export default function Form({ video }) {
  const [editVideo, { data: editedVideo, isLoading, isSuccess, isError }] =
    useEditVideoMutation()

  const {
    id,
    title: defaultTitle,
    description: defaultDescription,
    duration: defaultDuration,
    link: defaultLink,
    thumbnail: defaultThumbnail,
    author: defaultAuthor,
    views: defaultViews,
    date: defaultDate,
  } = video

  const [title, setTitle] = useState(defaultTitle)
  const [author, setAuthor] = useState(defaultAuthor)
  const [description, setDescription] = useState(defaultDescription)
  const [link, setLink] = useState(defaultLink)
  const [duration, setDuration] = useState(defaultDuration)
  const [thumbnail, setThumbnail] = useState(defaultThumbnail)
  const [date, setDate] = useState(defaultDate)
  const [views, setViews] = useState(defaultViews)

  const data = {
    title,
    author,
    description,
    link,
    duration,
    thumbnail,
    date,
    views,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editVideo({ id, data })
  }

  return (
    <form method='PATCH' onSubmit={handleSubmit}>
      <div className='overflow-hidden shadow sm:rounded-md'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <TextInput
                title='Video Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <TextInput
                title='Author'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className='col-span-6'>
              <TextArea
                title='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='col-span-6'>
              <TextInput
                title='YouTube Video link'
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className='col-span-6'>
              <TextInput
                title='Thumbnail link'
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
              <TextInput
                title='Upload Date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
              <TextInput
                title='Video Duration'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
              <TextInput
                title='Video no of views'
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='px-4 py-3 text-right bg-gray-50 sm:px-6'>
          <button
            type='submit'
            disabled={isLoading}
            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500'
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message='Video was added successfully' />}
        {isError && <Error message='There was an error adding video' />}
      </div>
    </form>
  )
}
