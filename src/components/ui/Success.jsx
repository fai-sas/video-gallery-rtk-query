/* eslint-disable react/prop-types */
export default function Success({ message }) {
  return (
    <div className='flex items-center w-full h-10 col-span-12 p-2 mx-auto text-teal-700 bg-teal-100 max-w-7xl justiry-center'>
      {message}
    </div>
  )
}
